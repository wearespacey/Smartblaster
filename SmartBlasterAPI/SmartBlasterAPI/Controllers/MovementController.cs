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
        [HttpGet("TurnLeft")]
        public async Task<IActionResult> Left()
        {
            

            return Ok();
        }

        [HttpGet("TurnRight")]
        public async Task<IActionResult> Right()
        {


            return Ok();
        }

        [HttpGet("GoForward")]
        public async Task<IActionResult> MoveForward()
        {


            return Ok();
        }

        [HttpGet("GoBackward")]
        public async Task<IActionResult> MoveBackward()
        {


            return Ok();
        }
    }
}