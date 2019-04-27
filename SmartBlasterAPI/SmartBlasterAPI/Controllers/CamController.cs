using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartBlasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CamController : ControllerBase
    {
        [Route("snap")]
        [HttpPost]
        [ProducesResponseType(200)]
        public IActionResult Snap([FromBody] byte[] image)
        {
            Debug.WriteLine("OK");
            return Ok();
        }
    }
}