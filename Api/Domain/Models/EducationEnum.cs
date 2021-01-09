using System.ComponentModel;

namespace Api.Domain.Models
{
    public enum EducationEnum : byte
    {
        [Description("Infantil")]
        Infantil = 1,
        [Description("Fundamental")]
        College = 2,
        [Description("Médio")]
        HighScholl = 3,
        [Description("Superior")]
        University = 4

    }
}