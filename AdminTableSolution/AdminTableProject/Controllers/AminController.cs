using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AdminTableProject.Models;

namespace AdminTableProject.Controllers
{
    public class AminController : ApiController
    {
        DB_EMISchemeDemoEntities entities = new DB_EMISchemeDemoEntities();
        [HttpGet]
        public IQueryable<UserRegistration> Get()
        {
            return entities.UserRegistrations;
        }
    }
}
