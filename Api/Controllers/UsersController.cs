using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Domain.Models;
using Api.Domain.Services;
using Api.Resources;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Api.Extensions;
using Microsoft.AspNetCore.Http;

namespace Api.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        
        public UsersController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        /// <summary>
        /// Returns all users.
        /// </summary>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<User>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IEnumerable<User>> GetAllAsync()
        {

            var users = await _userService.ListAsync();
            var resources = _mapper.Map<IEnumerable<User>, IEnumerable<UserResource>>(users);
            return users;
        }

        /// <summary>
        /// Returns specific user finding by Id
        /// </summary>
        /// <param name="id"></param>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(UserResource), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetById(int id)
        {

            var result = await _userService.FindByIdAsync(id);

            if (!result.Success)
                return BadRequest(result.Message);

            var userResource = _mapper.Map<User, UserResource>(result.User);
            return Ok(userResource);
        }

        /// <summary>
        /// Create user
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /Users
        ///     {
        ///         "firstName": "Leandro",
        ///         "lastName": "Moreira Cezar",
        ///         "email": "leandrocezar.dev@gmail.com",
        ///         "birthdayDate": "1984-04-06",
        ///         "education": 4
        ///     }
        /// </remarks>
        /// <param name="resource">User info</param>
        /// <returns>A newly created User</returns>
        /// <response code="200">Returns the newly created user</response>
        /// <response code="400">Returns the error message</response> 
        [HttpPost]
        [ProducesResponseType(typeof(UserResource), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PostAsync([FromBody] SaveUserResource resource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.GetErrorMessages());
            }
            var user = _mapper.Map<SaveUserResource, User>(resource);
            var result = await _userService.SaveAsync(user);

            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            var userResource = _mapper.Map<User, UserResource>(result.User);
            return Ok(userResource);
        }

        /// <summary>
        /// Update user info
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     PUT /Users
        ///     {
        ///         "firstName": "Leandro",
        ///         "lastName": "Moreira",
        ///         "email": "leandrocezar.dev@gmail.com",
        ///         "birthdayDate": "1984-04-06",
        ///         "education": 4
        ///     }
        /// </remarks>
        /// <param name="resource">User info</param>
        /// <returns> Updated User</returns>
        /// <response code="200">Returns the updated data</response>
        /// <response code="400">Returns the error message</response> 
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(UserResource), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PutAsync(int id, [FromBody] SaveUserResource resource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            var user = _mapper.Map<SaveUserResource, User>(resource);
            var result = await _userService.UpdateAsync(id, user);

            if (!result.Success)
                return BadRequest(result.Message);

            var userResource = _mapper.Map<User, UserResource>(result.User);
            return Ok(userResource);
        }

        /// <summary>
        /// Remove user
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Removed  User</returns>
        /// <response code="200">Returns the removed data</response>
        /// <response code="400">Returns the error message</response> 
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(UserResource), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _userService.DeleteAsync(id);

            if (!result.Success)
                return BadRequest(result.Message);

            var userResource = _mapper.Map<User, UserResource>(result.User);
            return Ok(userResource);
        }
    }
}