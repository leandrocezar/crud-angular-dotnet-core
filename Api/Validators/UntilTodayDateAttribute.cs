using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Validators
{
    public class UntilTodayDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            DateTime _dateValue = Convert.ToDateTime(value);
            if (_dateValue < DateTime.Now)
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult ($"{validationContext.DisplayName} não permite uma data futura");
            }
        }
    }
}