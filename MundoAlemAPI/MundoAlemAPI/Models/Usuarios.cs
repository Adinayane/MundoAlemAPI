using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace MundoAlemAPI.Models
{
    public class Usuarios
    {
        [Key]
        public int Id { get; set; }
        public string? cpf { get; set; }
        public string? nome { get; set; }
        public string? endereco { get; set; }
        public string? Uf { get; set; }
        public string? email { get; set; }

        public string? senha { get; set; }
    }
}
