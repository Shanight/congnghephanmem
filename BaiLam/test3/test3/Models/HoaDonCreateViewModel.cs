using System.Collections.Generic;
using test3.Models;

namespace test3.ViewModels
{
    public class HoaDonCreateViewModel
    {
        public HoaDon HoaDon { get; set; }
        public List<Phong> Phongs { get; set; }
        public List<DichVu> DichVus { get; set; }
        public List<NhanVien> NhanViens { get; set; }
        public List<KhachHang> KhachHangs { get; set; }
        public List<AnhPhong> AnhPhongs { get; set; }
    }
}