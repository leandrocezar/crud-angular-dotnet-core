using Api.Domain.Models;
using Api.Resources;
using AutoMapper;

namespace Api.Mapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<SaveUserResource, User>();
        }
    }
}