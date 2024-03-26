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

        public PhongsController(ApplicationDbContext context)
        {
            _context = context;
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
        public async Task<IActionResult> Create([Bind("Id,TenPhong,HangPhong,GiaPhong,TrangThai,SoPhong")] Phong phong, IFormFile file)
        {
            if (ModelState.IsValid)
            {
                _context.Add(phong);
                await _context.SaveChangesAsync();

                if (file != null && file.Length > 0)
                {
                    // Tạo tên file mới
                    string fileName = "AnhPhong" + phong.Id + ".png";

                    // Lưu ảnh vào thư mục tạm
                    string filePath = Path.Combine("wwwroot", "imgupload", "anhphong", fileName);
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    // Gọi phương thức Create trong AnhPhongsController và truyền thông tin ảnh và ID của phong
                    await CreateAnhPhong(fileName, phong.Id);

                    return RedirectToAction(nameof(Index));
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
            return View(phong);
        }

        // POST: Phongs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TenPhong,HangPhong,GiaPhong,TrangThai,SoPhong")] Phong phong)
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
                return RedirectToAction(nameof(Index));
            }
            return View(phong);
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
