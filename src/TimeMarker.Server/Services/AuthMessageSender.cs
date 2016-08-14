using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeMarker.Server.Services
{
    public class AuthMessageSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            // Plug in your email service here to send an email.
            return Task.FromResult(0);
        }
    }
}
