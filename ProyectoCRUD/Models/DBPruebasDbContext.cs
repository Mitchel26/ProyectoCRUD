using Microsoft.EntityFrameworkCore;

namespace ProyectoCRUD.Models
{
    public class DBPruebasDbContext : DbContext
    {
        public DBPruebasDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Contacto> Contactos { get; set; }
    }
}
