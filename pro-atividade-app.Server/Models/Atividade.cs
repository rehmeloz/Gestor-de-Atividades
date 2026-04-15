namespace pro_atividade_app.Server.Models;

public class Atividade
{
    public int Id { get; set; }

    public string? Titulo { get; set; }

    public string? Descricao { get; set; }

    public Prioridade Prioridade { get; set; }

    //public Atividade() { }

    //public Atividade(int id)
    //{
    //    Id = id;
    //}
}
