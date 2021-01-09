using System.ComponentModel.DataAnnotations;
using Api.Domain.Models;

namespace Api.Resources
{
    public class SaveUserResource
    {
        
        [Required(ErrorMessage="Campo nome é obrigatório")]
        [MaxLength(50, ErrorMessage="Tamanho máximo do campo nome é 50 caracteres")]
        public string FirstName { get; set; }
        [Required(ErrorMessage="Campo sobrenome é obrigatório")]
        [MaxLength(50, ErrorMessage="Tamanho máximo do sobrenome é 50 caracteres")]
        public string LastName { get; set; }
        [Required(ErrorMessage="Campo e-mail é obrigatório")]
        [MaxLength(80, ErrorMessage="Tamanho máximo do e-mail é 80 caracteres")]
        [EmailAddress(ErrorMessage="Campo e-mail não possui um endereço válido")]
        public string Email { get; set; }
        [Required(ErrorMessage="Campo data de nascimento é obrigatório")]
        public System.DateTime BirthdayDate { get; set; }
        [Required(ErrorMessage = "Campo escolaridade é obrigatório")]
        public EducationEnum Education { get; set; }
    }
}