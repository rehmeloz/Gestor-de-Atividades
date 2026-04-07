using pro_atividade_app.Server.Models;
using System.Data.Entity;

namespace pro_atividade_app.Server.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Atividade> Atividades { get; set; }
    }
}
