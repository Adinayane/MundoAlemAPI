using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MundoAlemAPI.Models;

namespace MundoAlemAPI.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions <DataContext> options) : base(options) { }
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Destinos> Destinos { get; set; }
        public DbSet<FormasPag> formasPags { get; set; }
        public DbSet<Contato> contato { get; set; }
    }
}
