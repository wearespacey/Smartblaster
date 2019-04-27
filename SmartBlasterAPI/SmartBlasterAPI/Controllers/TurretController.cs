using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SmartBlasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurretController : ControllerBase
    {
        [HttpGet("RotateLeft/{intensity}")]
        public async Task<IActionResult> Left(byte intensity)
        {


            return Ok();
        }

        [HttpGet("RotateRight/{intensity}")]
        public async Task<IActionResult> Right(byte intensity)
        {


            return Ok();
        }

        [HttpGet("LookUp/{intensity}")]
        public async Task<IActionResult> Up(byte intensity)
        {


            return Ok();
        }

        [HttpGet("LookDown/{intensity}")]
        public async Task<IActionResult> Down(byte intensity)
        {


            return Ok();
        }
    }
}