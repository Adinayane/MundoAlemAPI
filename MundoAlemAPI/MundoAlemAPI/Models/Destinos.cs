using System.ComponentModel.DataAnnotations;

namespace MundoAlemAPI.Models
{
    public class Destinos
    {
        [Key]
        public int Id { get; set; }
        public string? nomeDestino { get; set; }
        public double valorDestino { get; set; }
    }
}
