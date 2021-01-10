using System.ComponentModel;

namespace Api.Domain.Models
{
    public enum Education : byte
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