using System.ComponentModel.DataAnnotations;

namespace MundoAlemAPI.Models
{
    public class Contato
    {
        [Key]
        public int Id { get; set; }
        public string? assunto { get; set; }
        public string? email { get; set; }
        public bool lido { get; set; }
        public string? mensagem { get; set; }
        public string? nome { get; set; }
    }
}
