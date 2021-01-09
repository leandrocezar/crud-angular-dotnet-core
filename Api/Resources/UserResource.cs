using System;
using Api.Domain.Models;

namespace Api.Resources
{
    public class UserResource
    {
        
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime BirthdayDate { get; set; }
        
        public EducationEnum Education { get; set; }
    }
}