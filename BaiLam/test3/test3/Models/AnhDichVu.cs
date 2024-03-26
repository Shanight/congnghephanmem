using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace test3.Models
{
    public class AnhDichVu
    {
        public int Id { get; set; }
        [Required]
        public string TenAnh { get; set; }
        public string NhomAnh { get; set; }
        // Thêm các trường khác nếu cần
    }
}