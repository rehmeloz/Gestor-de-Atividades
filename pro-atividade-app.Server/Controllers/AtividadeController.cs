using Microsoft.AspNetCore.Mvc;
using pro_atividade_app.Server.Models;

namespace pro_atividade_app.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public Atividade Get()
        {
            return new Atividade();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return $"Primeiro método get com parâmetro {id}";
        }

        [HttpPost]
        public Atividade Post(Atividade atividade)
        {
            atividade.Id = 25;
            return atividade;
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Primeiro método put com parâmetro {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Primeiro método delete com parâmetro {id}";
        }
    }
}
