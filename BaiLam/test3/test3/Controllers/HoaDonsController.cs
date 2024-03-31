﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using test3.Models;
using test3.ViewModels;

namespace test3.Controllers
{
    public class HoaDonsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HoaDonsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: HoaDons
        public async Task<IActionResult> Index()
        {
            return View(await _context.HoaDons.ToListAsync());
        }

        // GET: HoaDons/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hoaDon = await _context.HoaDons
                .FirstOrDefaultAsync(m => m.Id == id);
            if (hoaDon == null)
            {
                return NotFound();
            }

            return View(hoaDon);
        }

        // GET: HoaDons/Create
        public IActionResult Create()
        {
            ViewBag.Phongs = _context.Phongs.ToList();
            ViewBag.DichVus = _context.DichVus.ToList();
            ViewBag.NhanViens = _context.NhanViens.ToList();
            ViewBag.KhachHangs = _context.KhachHangs.ToList();
            ViewBag.AnhPhongs = _context.AnhPhongs.ToList();
            return View();
        }

        // POST: HoaDons/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        /*
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,MaPhong,TrangThai,IDNV,IDKH,TongTien,NgayDat,NgayNhan,NgayTra")] HoaDonCreateViewModel hoaDonViewModel)
{
    if (ModelState.IsValid)
    {
        var hoaDon = new HoaDon
        {
            Hoadon.IDDVSD = hoaDonViewModel.HoaDon.IDDVSD,
            MaDP = hoaDonViewModel.HoaDon.MaDP,
            TrangThai = hoaDonViewModel.HoaDon.TrangThai,
            IDNV = hoaDonViewModel.HoaDon.IDNV,
            IDKH = hoaDonViewModel.HoaDon.IDKH,
            TongTien = hoaDonViewModel.HoaDon.TongTien,
            NgayDat = hoaDonViewModel.HoaDon.NgayDat,
            NgayNhan = hoaDonViewModel.HoaDon.NgayNhan,
            NgayTra = hoaDonViewModel.HoaDon.NgayTra
        };

        _context.Add(hoaDon);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

    hoaDonViewModel.KhachHangs = _context.KhachHangs.ToList();
    hoaDonViewModel.NhanViens = _context.NhanViens.ToList();

    return View(hoaDonViewModel);
}
*/
        [HttpPost]
        [ValidateAntiForgeryToken]

        public IActionResult Create(HoaDon hoaDon)
        {
            if (ModelState.IsValid)
            {
                
                _context.Add(hoaDon);
                _context.SaveChanges();
                return RedirectToAction("Index");

            }
            ViewBag.Phongs = _context.Phongs.ToList();
            ViewBag.DichVus = _context.DichVus.ToList();
            ViewBag.NhanViens = _context.NhanViens.ToList();
            ViewBag.KhachHangs = _context.KhachHangs.ToList();
            ViewBag.AnhPhongs = _context.AnhPhongs.ToList();

            return View(hoaDon);
        }

        // GET: HoaDons/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hoaDon = await _context.HoaDons.FindAsync(id);
            if (hoaDon == null)
            {
                return NotFound();
            }
            return View(hoaDon);
        }

        // POST: HoaDons/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,MaPhong,TrangThai,IDNV,IDKH,TongTien,NgayDat,NgayNhan,NgayTra")] HoaDon hoaDon)
        {
            if (id != hoaDon.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(hoaDon);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HoaDonExists(hoaDon.Id))
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
            return View(hoaDon);
        }

        // GET: HoaDons/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hoaDon = await _context.HoaDons
                .FirstOrDefaultAsync(m => m.Id == id);
            if (hoaDon == null)
            {
                return NotFound();
            }

            return View(hoaDon);
        }

        // POST: HoaDons/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var hoaDon = await _context.HoaDons.FindAsync(id);
            if (hoaDon != null)
            {
                _context.HoaDons.Remove(hoaDon);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool HoaDonExists(int id)
        {
            return _context.HoaDons.Any(e => e.Id == id);
        }
    }
}
