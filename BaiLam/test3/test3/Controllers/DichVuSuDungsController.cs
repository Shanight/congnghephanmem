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
    public class DichVuSuDungsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DichVuSuDungsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: DichVuSuDungs
        public async Task<IActionResult> Index()
        {
            return View(await _context.DichVuSuDungs.ToListAsync());
        }

        // GET: DichVuSuDungs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dichVuSuDung = await _context.DichVuSuDungs
                .FirstOrDefaultAsync(m => m.Id == id);
            if (dichVuSuDung == null)
            {
                return NotFound();
            }

            return View(dichVuSuDung);
        }

        // GET: DichVuSuDungs/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: DichVuSuDungs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,MaDP,IDDV,SoLuong")] DichVuSuDung dichVuSuDung)
        {
            if (ModelState.IsValid)
            {
                _context.Add(dichVuSuDung);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(dichVuSuDung);
        }

        // GET: DichVuSuDungs/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dichVuSuDung = await _context.DichVuSuDungs.FindAsync(id);
            if (dichVuSuDung == null)
            {
                return NotFound();
            }
            return View(dichVuSuDung);
        }

        // POST: DichVuSuDungs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,MaDP,IDDV,SoLuong")] DichVuSuDung dichVuSuDung)
        {
            if (id != dichVuSuDung.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(dichVuSuDung);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DichVuSuDungExists(dichVuSuDung.Id))
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
            return View(dichVuSuDung);
        }

        // GET: DichVuSuDungs/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var dichVuSuDung = await _context.DichVuSuDungs
                .FirstOrDefaultAsync(m => m.Id == id);
            if (dichVuSuDung == null)
            {
                return NotFound();
            }

            return View(dichVuSuDung);
        }

        // POST: DichVuSuDungs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var dichVuSuDung = await _context.DichVuSuDungs.FindAsync(id);
            if (dichVuSuDung != null)
            {
                _context.DichVuSuDungs.Remove(dichVuSuDung);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DichVuSuDungExists(int id)
        {
            return _context.DichVuSuDungs.Any(e => e.Id == id);
        }
    }
}
