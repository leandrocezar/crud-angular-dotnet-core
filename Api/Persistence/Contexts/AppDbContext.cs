using System.Diagnostics.CodeAnalysis;
using Api.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Persistence.Contexts
{
    public class AppDbContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        
        public AppDbContext([NotNullAttribute] DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        
        
    }
}