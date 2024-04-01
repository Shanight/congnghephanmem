using System.ComponentModel.DataAnnotations;

namespace test3.Models
{
    public class NhanVien
    {
        public int Id { get; set; }
        public string TenNV { get; set; }
        public string GioiTinh { get; set; }
        public string NgaySinh { get; set; }

        public string AnhDaiDien { get; set; }
        public string DiaChi { get; set; }
        public string SDT { get; set; }
        public string Email { get; set; }
        public string NgayVaoLam { get; set; }
        public string TinhTrang { get; set; }
        public int MucLuong { get; set; }
        public string ViTri { get; set; }
        // Thêm các trường khác nếu cần
    }
}