using System.ComponentModel.DataAnnotations;

namespace MundoAlemAPI.Models
{
    public class FormasPag
    {
        [Key]
        public int Id { get; set; }
        public string? descrPag { get; set; }
    }
}
