using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Models;
using Api.Domain.Services.Communication;

namespace Api.Domain.Services
{
    public interface IUserService
    {
         Task<IEnumerable<User>> ListAsync();
         Task<UserResponse> SaveAsync(User user);
         Task<UserResponse> UpdateAsync(int id, User user);
         Task<UserResponse> DeleteAsync(int id);
         Task<UserResponse> FindByIdAsync(int id);
    }
}