using System.ComponentModel.DataAnnotations;
using Api.Domain.Models;
using Api.Validators;

namespace Api.Resources
{
    public class SaveUserResource
    {
        [Required(ErrorMessage="{0} é obrigatório")]
        [MaxLength(50, ErrorMessage="Tamanho máximo do campo {0} é 50 caracteres")]
        public string FirstName { get; set; }
        [Required(ErrorMessage="{0} é obrigatório")]
        [MaxLength(50, ErrorMessage="Tamanho máximo do {0}} é 50 caracteres")]
        public string LastName { get; set; }
        [Required(ErrorMessage="{0} é obrigatório")]
        [MaxLength(80, ErrorMessage="Tamanho máximo do {0} é 80 caracteres")]
        [EmailAddress(ErrorMessage="Campo {0} não possui um endereço válido")]
        public string Email { get; set; }
        [Required(ErrorMessage="{0} é obrigatório")]
        [UntilTodayDateAttribute]
        public System.DateTime BirthdayDate { get; set; }
        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        // [Range(1,4, ErrorMessage="Valores permitidos para o campo escolaridade: 1 à 4.")]
        [EnumDataType
            (typeof(Education), ErrorMessage="Valor inválido para {0}.")]  
        public Education Education { get; set; }
    }
}