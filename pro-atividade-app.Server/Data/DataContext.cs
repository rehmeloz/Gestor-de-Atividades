using pro_atividade_app.Server.Models;
using Microsoft.EntityFrameworkCore; 

namespace pro_atividade_app.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Atividade> Atividades { get; set; }
    }
}