using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TimeMarker.Server.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Password { get; set; }
        public string Name { get; set; }
    }
}
