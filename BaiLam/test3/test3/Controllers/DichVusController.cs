using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using test3.Models;

namespace test3.Controllers
{
    public class DichVusController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public DichVusController(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;

        }

        // GET: DichVus
        public async Task<IActionResult> Index()
        {
            return View(await _context.DichVus.ToListAsync());
        }

        // GET: DichVus/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dichVu = await _context.DichVus
                .FirstOrDefaultAsync(m => m.Id == id);
            if (dichVu == null)
            {
                return NotFound();
            }

            return View(dichVu);
        }

        // GET: DichVus/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: DichVus/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,TenDV,MoTa,Gia,LoaiDV,SoLuong")] DichVu dichVu, List<IFormFile> photos)
        {
            if (ModelState.IsValid)
            {
                _context.Add(dichVu);
                await _context.SaveChangesAsync();
                if (photos != null && photos.Count > 0)
                {
                    foreach (var photo in photos)
                    {
                        if (photo.Length > 0)
                        {
                            // Tạo tên file mới
                            string fileName = "AnhDV_" + dichVu.Id + "_" + Guid.NewGuid().ToString() + ".png";

                            // Lưu ảnh vào thư mục tạm
                            string filePath = Path.Combine("wwwroot", "imgupload", "anhdichvu", fileName);
                            using (var stream = new FileStream(filePath, FileMode.Create))
                            {
                                await photo.CopyToAsync(stream);
                            }

                            await CreateAnhDichVu(fileName, dichVu.Id);
                        }
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(dichVu);
        }

        private async Task CreateAnhDichVu(string tenAnh, int idDichvu)
        {
            var anhDichVu = new AnhDichVu
            {
                TenAnh = tenAnh,
                NhomAnh = idDichvu.ToString()
            };

            _context.Add(anhDichVu);
            await _context.SaveChangesAsync();
        }

        // GET: DichVus/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dichVu = await _context.DichVus.FindAsync(id);
            if (dichVu == null)
            {
                return NotFound();
            }
            var anhDichVus = await _context.AnhDichVus
       .Where(a => a.NhomAnh == id.ToString())
       .Select(a => a.TenAnh)
       .ToListAsync();
            ViewBag.AnhDichVus = anhDichVus;
            return View(dichVu);
        }

        // POST: DichVus/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TenDV,MoTa,Gia,LoaiDV,SoLuong")] DichVu dichVu, List<IFormFile> photos)
        {
            if (id != dichVu.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(dichVu);
                    await _context.SaveChangesAsync();

                    if (photos != null && photos.Count > 0)
                    {
                        await DeleteAnhDichVu(dichVu.Id);

                        foreach (var photo in photos)
                        {
                            if (photo.Length > 0)
                            {
                                // Generate a new file name
                                string fileName = "AnhDichVu_ID" + dichVu.Id + "_" + Guid.NewGuid().ToString() + Path.GetExtension(photo.FileName);

                                // Define the relative path for saving the image
                                string relativePath = Path.Combine("imgupload", "anhdichvu", fileName);

                                // Get the absolute file path on the server
                                string filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", relativePath);

                                // Save the image file to the server
                                using (var stream = new FileStream(filePath, FileMode.Create))
                                {
                                    await photo.CopyToAsync(stream);
                                }

                                // Call the Create method in the AnhPhongsController and pass the image information and the room ID
                                await CreateAnhDichVu(fileName, dichVu.Id);
                            }
                        }
                    }



                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DichVuExists(dichVu.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            return View(dichVu);
        }

        private async Task DeleteImage(int id)
        {
            var anhDichVu = await _context.AnhDichVus.FindAsync(id);

            if (anhDichVu != null)
            {
                _context.AnhDichVus.Remove(anhDichVu);
                await _context.SaveChangesAsync();
            }
        }

        private async Task DeleteAnhDichVu(int idDichVu)
        {
            var anhDichVus = await _context.AnhDichVus
                .Where(a => a.NhomAnh == idDichVu.ToString())
                .ToListAsync();

            foreach (var anhDichVu in anhDichVus)
            {
                // Xóa ảnh từ thư mục lưu trữ
                string filePath = Path.Combine(_webHostEnvironment.WebRootPath, "imgupload", "anhdichvu", anhDichVu.TenAnh);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }

                // Xóa ảnh từ cơ sở dữ liệu
                _context.AnhDichVus.Remove(anhDichVu);
            }

            await _context.SaveChangesAsync();
        }


        // GET: DichVus/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dichVu = await _context.DichVus
                .FirstOrDefaultAsync(m => m.Id == id);
            if (dichVu == null)
            {
                return NotFound();
            }

            return View(dichVu);
        }

        // POST: DichVus/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var dichVu = await _context.DichVus.FindAsync(id);
            if (dichVu != null)
            {
                _context.DichVus.Remove(dichVu);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DichVuExists(int id)
        {
            return _context.DichVus.Any(e => e.Id == id);
        }
    }
}
