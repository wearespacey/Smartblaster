using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SmartBlasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovementController : ControllerBase
    {
        [HttpGet("TurnLeft/{intensity}")]
        public async Task<IActionResult> Left(byte intensity)
        {
            

            return Ok();
        }

        [HttpGet("TurnRight/{intensity}")]
        public async Task<IActionResult> Right(byte intensity)
        {


            return Ok();
        }

        [HttpGet("GoForward/{intensity}")]
        public async Task<IActionResult> MoveForward(byte intensity)
        {


            return Ok();
        }

        [HttpGet("GoBackward/{intensity}")]
        public async Task<IActionResult> MoveBackward(byte intensity)
        {


            return Ok();
        }
    }
}