using System.ComponentModel.DataAnnotations;
using Api.Domain.Models;
using Api.Validators;

namespace Api.Resources
{
    public class SaveUserResource
    {
        [Display(Name="Nome")]
        [Required(ErrorMessage="{0} é obrigatório")]
        [MaxLength(50, ErrorMessage="Tamanho máximo do campo {0} é 50 caracteres")]
        public string FirstName { get; set; }
        
        [Display(Name="Sobrenome")]
        [Required(ErrorMessage="{0} é obrigatório")]
        [MaxLength(50, ErrorMessage="Tamanho máximo do {0}} é 50 caracteres")]
        public string LastName { get; set; }

        [Display(Name="E-mail")]
        [Required(ErrorMessage="{0} é obrigatório")]
        [MaxLength(80, ErrorMessage="Tamanho máximo do {0} é 80 caracteres")]
        [EmailAddress(ErrorMessage="Campo {0} não possui um endereço válido")]
        public string Email { get; set; }
        
        [Display(Name="Data de nascimento")]
        [Required(ErrorMessage="{0} é obrigatório")]
        [UntilTodayDateAttribute]
        public System.DateTime BirthdayDate { get; set; }

        [Display(Name="Escolaridade")]
        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        [EnumDataType
            (typeof(Education), ErrorMessage="Valor inválido para {0}.")]  
        public Education Education { get; set; }
    }
}