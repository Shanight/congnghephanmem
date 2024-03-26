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
    public class AnhPhongsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AnhPhongsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: AnhPhongs
        public async Task<IActionResult> Index()
        {
            return View(await _context.AnhPhongs.ToListAsync());
        }

        // GET: AnhPhongs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var anhPhong = await _context.AnhPhongs
                .FirstOrDefaultAsync(m => m.Id == id);
            if (anhPhong == null)
            {
                return NotFound();
            }

            return View(anhPhong);
        }

        // GET: AnhPhongs/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: AnhPhongs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,TenAnh,NhomAnh")] AnhPhong anhPhong)
        {
            if (ModelState.IsValid)
            {
                _context.Add(anhPhong);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(anhPhong);
        }

        // GET: AnhPhongs/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var anhPhong = await _context.AnhPhongs.FindAsync(id);
            if (anhPhong == null)
            {
                return NotFound();
            }
            return View(anhPhong);
        }

        // POST: AnhPhongs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,TenAnh,NhomAnh")] AnhPhong anhPhong)
        {
            if (id != anhPhong.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(anhPhong);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AnhPhongExists(anhPhong.Id))
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
            return View(anhPhong);
        }

        // GET: AnhPhongs/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var anhPhong = await _context.AnhPhongs
                .FirstOrDefaultAsync(m => m.Id == id);
            if (anhPhong == null)
            {
                return NotFound();
            }

            return View(anhPhong);
        }

        // POST: AnhPhongs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var anhPhong = await _context.AnhPhongs.FindAsync(id);
            if (anhPhong != null)
            {
                _context.AnhPhongs.Remove(anhPhong);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AnhPhongExists(int id)
        {
            return _context.AnhPhongs.Any(e => e.Id == id);
        }
    }
}
