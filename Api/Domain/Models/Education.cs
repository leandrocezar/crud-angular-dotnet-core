using System.ComponentModel;

namespace Api.Domain.Models
{
    public enum Education : byte
    {
        [Description("Infantil")]
        Preschool = 1,
        [Description("Fundamental")]
        College = 2,
        [Description("Médio")]
        HighSchool = 3,
        [Description("Superior")]
        University = 4

    }
}