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
    public class HoaDonChiTietsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HoaDonChiTietsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: HoaDonChiTiets
        public async Task<IActionResult> Index()
        {
            return View(await _context.HoaDonChiTiets.ToListAsync());
        }

        // GET: HoaDonChiTiets/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hoaDonChiTiet = await _context.HoaDonChiTiets
                .FirstOrDefaultAsync(m => m.Id == id);
            if (hoaDonChiTiet == null)
            {
                return NotFound();
            }

            return View(hoaDonChiTiet);
        }

        // GET: HoaDonChiTiets/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: HoaDonChiTiets/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,IDHD,NgayDat,NgayNhan,NgayTra,Tien")] HoaDonChiTiet hoaDonChiTiet)
        {
            if (ModelState.IsValid)
            {
                _context.Add(hoaDonChiTiet);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(hoaDonChiTiet);
        }

        // GET: HoaDonChiTiets/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hoaDonChiTiet = await _context.HoaDonChiTiets.FindAsync(id);
            if (hoaDonChiTiet == null)
            {
                return NotFound();
            }
            return View(hoaDonChiTiet);
        }

        // POST: HoaDonChiTiets/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,IDHD,NgayDat,NgayNhan,NgayTra,Tien")] HoaDonChiTiet hoaDonChiTiet)
        {
            if (id != hoaDonChiTiet.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(hoaDonChiTiet);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HoaDonChiTietExists(hoaDonChiTiet.Id))
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
            return View(hoaDonChiTiet);
        }

        // GET: HoaDonChiTiets/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hoaDonChiTiet = await _context.HoaDonChiTiets
                .FirstOrDefaultAsync(m => m.Id == id);
            if (hoaDonChiTiet == null)
            {
                return NotFound();
            }

            return View(hoaDonChiTiet);
        }

        // POST: HoaDonChiTiets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var hoaDonChiTiet = await _context.HoaDonChiTiets.FindAsync(id);
            if (hoaDonChiTiet != null)
            {
                _context.HoaDonChiTiets.Remove(hoaDonChiTiet);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool HoaDonChiTietExists(int id)
        {
            return _context.HoaDonChiTiets.Any(e => e.Id == id);
        }
    }
}
