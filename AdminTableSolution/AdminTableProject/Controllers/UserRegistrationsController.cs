using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AdminTableProject.Models;

namespace AdminTableProject.Controllers
{
    public class UserRegistrationsController : ApiController
    {
        private DB_EMISchemeDemoEntities db = new DB_EMISchemeDemoEntities();

        // GET: api/UserRegistrations
        public IQueryable<UserRegistration> GetUserRegistrations()
        {
            return db.UserRegistrations;
        }

        // GET: api/UserRegistrations/5
        [ResponseType(typeof(UserRegistration))]
        public IHttpActionResult GetUserRegistration(int id)
        {
            UserRegistration userRegistration = db.UserRegistrations.Find(id);
            if (userRegistration == null)
            {
                return NotFound();
            }

            return Ok(userRegistration);
        }

        // PUT: api/UserRegistrations/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserRegistration(int id, UserRegistration userRegistration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userRegistration.user_id)
            {
                return BadRequest();
            }

            db.Entry(userRegistration).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserRegistrationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserRegistrations
        [ResponseType(typeof(UserRegistration))]
        public IHttpActionResult PostUserRegistration(UserRegistration userRegistration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserRegistrations.Add(userRegistration);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (UserRegistrationExists(userRegistration.user_id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = userRegistration.user_id }, userRegistration);
        }

        // DELETE: api/UserRegistrations/5
        [ResponseType(typeof(UserRegistration))]
        public IHttpActionResult DeleteUserRegistration(int id)
        {
            UserRegistration userRegistration = db.UserRegistrations.Find(id);
            if (userRegistration == null)
            {
                return NotFound();
            }

            db.UserRegistrations.Remove(userRegistration);
            db.SaveChanges();

            return Ok(userRegistration);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserRegistrationExists(int id)
        {
            return db.UserRegistrations.Count(e => e.user_id == id) > 0;
        }
    }
}