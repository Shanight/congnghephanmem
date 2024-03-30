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
    public class NhanViensController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IWebHostEnvironment _hostingEnvironment;


        public NhanViensController(ApplicationDbContext context, IWebHostEnvironment webHostEnvironment, IWebHostEnvironment hostingEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
            _hostingEnvironment = hostingEnvironment;


        }

        // GET: NhanViens
        public async Task<IActionResult> Index()
        {
            return View(await _context.NhanViens.ToListAsync());
        }

        // GET: NhanViens/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var nhanVien = await _context.NhanViens
                .FirstOrDefaultAsync(m => m.Id == id);
            if (nhanVien == null)
            {
                return NotFound();
            }

            return View(nhanVien);
        }

        // GET: NhanViens/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: NhanViens/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,TenNV,GioiTinh,NgaySinh,AnhDaiDien,DiaChi,SDT,Email,NgayVaoLam,TinhTrang,MucLuong,ViTri")] NhanVien nhanVien, IFormFile photo)
        {
            if (ModelState.IsValid)
            {
                DateTime ngayHienTai = DateTime.Now;
                string tenAnhDaiDien = nhanVien.TenNV + "_" + nhanVien.Id.ToString() + "_" + ngayHienTai.ToString("yyyyMMddHHmmss");

                string thuMucAnhDaiDien = Path.Combine(_hostingEnvironment.WebRootPath, "imgupload/anhdaidien");
                string duongDanAnhDaiDien = Path.Combine(thuMucAnhDaiDien, tenAnhDaiDien + ".png");
                using (var stream = new FileStream(duongDanAnhDaiDien, FileMode.Create))
                {
                    await photo.CopyToAsync(stream);
                }

                nhanVien.AnhDaiDien = "/imgupload/anhdaidien/" + tenAnhDaiDien + ".png";

                _context.Add(nhanVien);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(nhanVien);
        }

        // GET: NhanViens/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var nhanVien = await _context.NhanViens.FindAsync(id);
            if (nhanVien == null)
            {
                return NotFound();
            }
            return View(nhanVien);
        }

        // POST: NhanViens/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TenNV,GioiTinh,NgaySinh,DiaChi,SDT,Email,NgayVaoLam,TinhTrang,MucLuong,AnhDaiDien,ViTri")] NhanVien nhanVien, IFormFile photo)
        {
            if (id != nhanVien.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    var existingNhanVien = await _context.NhanViens.FindAsync(id);

                    if (existingNhanVien == null)
                    {
                        return NotFound();
                    }

                    if (photo != null)
                    {
                        // Xóa ảnh cũ (nếu có)
                        if (!string.IsNullOrEmpty(existingNhanVien.AnhDaiDien))
                        {
                            string duongDanAnhCu = Path.Combine(_hostingEnvironment.WebRootPath, existingNhanVien.AnhDaiDien.TrimStart('/'));
                            if (System.IO.File.Exists(duongDanAnhCu))
                            {
                                System.IO.File.Delete(duongDanAnhCu);
                            }
                        }

                        // Tải lên ảnh mới
                        DateTime ngayHienTai = DateTime.Now;
                        string tenAnhDaiDien = nhanVien.TenNV + "_" + nhanVien.Id.ToString() + "_" + ngayHienTai.ToString("yyyyMMddHHmmss");

                        string thuMucAnhDaiDien = Path.Combine(_hostingEnvironment.WebRootPath, "imgupload/anhdaidien");
                        string duongDanAnhDaiDien = Path.Combine(thuMucAnhDaiDien, tenAnhDaiDien + ".png");

                        using (var stream = new FileStream(duongDanAnhDaiDien, FileMode.Create))
                        {
                            await photo.CopyToAsync(stream);
                        }

                        nhanVien.AnhDaiDien = "/imgupload/anhdaidien/" + tenAnhDaiDien + ".png";
                    }
                    else
                    {
                        // Giữ ảnh cũ
                        nhanVien.AnhDaiDien = existingNhanVien.AnhDaiDien;
                    }

                    _context.Entry(existingNhanVien).CurrentValues.SetValues(nhanVien);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!NhanVienExists(nhanVien.Id))
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

            return View(nhanVien);
        }
        // GET: NhanViens/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var nhanVien = await _context.NhanViens
                .FirstOrDefaultAsync(m => m.Id == id);
            if (nhanVien == null)
            {
                return NotFound();
            }

            return View(nhanVien);
        }

        // POST: NhanViens/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var nhanVien = await _context.NhanViens.FindAsync(id);
            if (nhanVien != null)
            {
                _context.NhanViens.Remove(nhanVien);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool NhanVienExists(int id)
        {
            return _context.NhanViens.Any(e => e.Id == id);
        }
    }
}
