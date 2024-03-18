using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BaiLam.Models
{
    public class NhanVien
    {
        public int IDNV { get; set; }
        [Required]
        public string TenNV { get; set; }
        public string GioiTinh { get; set; }
        public DateTime NgaySinh { get; set; }
        public string AnhDaiDien { get; set; }
        public string DiaChi { get; set; }
        public string SDT { get; set; }
        public string Email { get; set; }
        public string ViTri { get; set; }
        public DateTime NgayVaoLam { get; set; }
        public string TinhTrang { get; set; }
        public string MucLuong { get; set; }

        // Thêm các trường khác nếu cần
    }
}