using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ExternalAPIs.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PokemonController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public PokemonController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Pokemon()
        {
            // obtener 500 pokemons de la api pokeapi.co
            string apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=500";

            using (HttpClient httpClient = _httpClientFactory.CreateClient())
            {
                try
                {
                    HttpResponseMessage response = await httpClient.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        string content = await response.Content.ReadAsStringAsync();
                        return Ok(content);

                    }
                    else
                    {
                        return StatusCode((int)response.StatusCode, "Error getting data");
                    }
                }
                catch (HttpRequestException ex)
                {
                    return StatusCode(500, "Error getting data" + ex.Message);
                }
            }
        }
    }
}