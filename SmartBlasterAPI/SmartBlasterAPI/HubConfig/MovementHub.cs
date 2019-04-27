using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using SmartBlasterAPI.Models;

namespace SmartBlasterAPI.HubConfig
{
    public class MovementHub: Hub
    {

        public async Task BroadcastMovementData(MovementModel data)
        {
            await Clients.All.SendAsync("broadcastmovementdata", data);
            Debug.WriteLine("Yes");
        } 
    }
}