using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SmartBlasterAPI.DataStorage;
using SmartBlasterAPI.HubConfig;
using SmartBlasterAPI.TimerFeatures;

namespace SmartBlasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartController : ControllerBase
    {
        private IHubContext<MovementHub> _hub;
 
        public ChartController(IHubContext<MovementHub> hub)
        {
            _hub = hub;
        }
 
        public IActionResult Get()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("transferchartdata", DataManager.GetData()));
 
            return Ok(new { Message = "Request Completed" });
        }
    }
}