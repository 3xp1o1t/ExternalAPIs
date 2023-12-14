using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ExternalAPIs.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public TestController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Tests()
        {
            string apiUrl = "https://jsonplaceholder.typicode.com/todos/";

            using (HttpClient httpClient = _httpClientFactory.CreateClient())
            {
                try
                {
                    // make request
                    HttpResponseMessage response = await httpClient.GetAsync(apiUrl);

                    // check response
                    if (response.IsSuccessStatusCode)
                    {
                        string data = await response.Content.ReadAsStringAsync();

                        return Ok(data);
                    }
                    else
                    {
                        return StatusCode((int)response.StatusCode, "Error getting data");
                    }

                }
                catch (HttpRequestException ex)
                {
                    return StatusCode(500, "Error getting data: " + ex.Message);
                }
            }
        }
    }
}