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
    public class PhongsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public PhongsController(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }
        // GET: Phongs
        public async Task<IActionResult> Index()
        {
            return View(await _context.Phongs.ToListAsync());
        }

        // GET: Phongs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var phong = await _context.Phongs
                .FirstOrDefaultAsync(m => m.Id == id);

            if (phong == null)
            {
                return NotFound();
            }

            var anhPhongs = await _context.AnhPhongs
       .Where(a => a.NhomAnh == id.ToString())
       .Select(a => a.TenAnh)
       .ToListAsync();
            ViewBag.AnhPhongs = anhPhongs;

            return View(phong);
        }

        // GET: Phongs/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Phongs/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,TenPhong,HangPhong,GiaPhong,TrangThai,SoPhong")] Phong phong, List<IFormFile> photos)
        {
            if (ModelState.IsValid)
            {
                _context.Add(phong);
                await _context.SaveChangesAsync();

                if (photos != null && photos.Count > 0)
                {
                    foreach (var photo in photos)
                    {
                        if (photo.Length > 0)
                        {
                            // Tạo tên file mới
                            string fileName = "AnhPhong" + phong.Id + "_" + Guid.NewGuid().ToString() + ".png";

                            // Lưu ảnh vào thư mục tạm
                            string filePath = Path.Combine("wwwroot", "imgupload", "anhphong", fileName);
                            using (var stream = new FileStream(filePath, FileMode.Create))
                            {
                                await photo.CopyToAsync(stream);
                            }

                            // Gọi phương thức Create trong AnhPhongsController và truyền thông tin ảnh và ID của phòng
                            await CreateAnhPhong(fileName, phong.Id);
                        }
                    }
                }

                return RedirectToAction(nameof(Index));
            }

            return View(phong);
        }
        // Phương thức tạo mới trong AnhPhongsController để lưu ảnh và thông tin
        private async Task CreateAnhPhong(string tenAnh, int idPhong)
        {
            var anhPhong = new AnhPhong
            {
                TenAnh = tenAnh,
                NhomAnh = idPhong.ToString()
            };

            _context.Add(anhPhong);
            await _context.SaveChangesAsync();
        }

        // Các hành động khác trong AnhPhongsController (Index, Details, Edit, Delete) không cần thay đổi
        // GET: Phongs/Edit/5
        // GET: Phongs/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var phong = await _context.Phongs.FindAsync(id);
            if (phong == null)
            {
                return NotFound();
            }
            var anhPhongs = await _context.AnhPhongs
       .Where(a => a.NhomAnh == id.ToString())
       .Select(a => a.TenAnh)
       .ToListAsync();
            ViewBag.AnhPhongs = anhPhongs;
            return View(phong);
        }

        // POST: Phongs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TenPhong,HangPhong,GiaPhong,TrangThai,SoPhong")] Phong phong, List<IFormFile> photos)
        {
            if (id != phong.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(phong);
                    await _context.SaveChangesAsync();

                    if (photos != null && photos.Count > 0)
                    {
                        await DeleteAnhPhong(phong.Id);

                        foreach (var photo in photos)
                        {
                            if (photo.Length > 0)
                            {
                                // Generate a new file name
                                string fileName = "AnhPhong" + phong.Id + "_" + Guid.NewGuid().ToString() + Path.GetExtension(photo.FileName);

                                // Define the relative path for saving the image
                                string relativePath = Path.Combine("imgupload", "anhphong", fileName);

                                // Get the absolute file path on the server
                                string filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", relativePath);

                                // Save the image file to the server
                                using (var stream = new FileStream(filePath, FileMode.Create))
                                {
                                    await photo.CopyToAsync(stream);
                                }

                                // Call the Create method in the AnhPhongsController and pass the image information and the room ID
                                await CreateAnhPhong(fileName, phong.Id);
                            }
                        }
                    }



                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PhongExists(phong.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return View(phong);
        }

        //xoaanh
        private async Task DeleteImage(int id)
        {
            var anhPhong = await _context.AnhPhongs.FindAsync(id);

            if (anhPhong != null)
            {
                _context.AnhPhongs.Remove(anhPhong);
                await _context.SaveChangesAsync();
            }
        }


        // Phương thức xóa trong AnhPhongsController để xóa ảnh
        private async Task DeleteAnhPhong(int idPhong)
        {
            var anhPhongs = await _context.AnhPhongs
                .Where(a => a.NhomAnh == idPhong.ToString())
                .ToListAsync();

            foreach (var anhPhong in anhPhongs)
            {
                // Xóa ảnh từ thư mục lưu trữ
                string filePath = Path.Combine(_webHostEnvironment.WebRootPath, "imgupload", "anhphong", anhPhong.TenAnh);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }

                // Xóa ảnh từ cơ sở dữ liệu
                _context.AnhPhongs.Remove(anhPhong);
            }

            await _context.SaveChangesAsync();
        }

        // GET: Phongs/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var phong = await _context.Phongs
                .FirstOrDefaultAsync(m => m.Id == id);
            if (phong == null)
            {
                return NotFound();
            }

            return View(phong);
        }

        // POST: Phongs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var phong = await _context.Phongs.FindAsync(id);
            if (phong != null)
            {
                _context.Phongs.Remove(phong);
                await _context.SaveChangesAsync();
            }

            return RedirectToAction(nameof(Index));
        }

        private bool PhongExists(int id)
        {
            return _context.Phongs.Any(e => e.Id == id);
        }
    }
}
