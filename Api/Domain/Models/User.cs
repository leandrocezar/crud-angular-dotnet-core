using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Domain.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [Required]
        [MaxLength(80)]
        public string Email { get; set; }
        [Required]
        public DateTime BirthdayDate { get; set; }
        [Required]
        public EducationEnum Education { get; set; }
        
    }
}