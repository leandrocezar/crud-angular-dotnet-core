using Api.Domain.Models;
using Api.Resources;
using AutoMapper;

namespace Api.Mapping
{
    public class ModelToResourceProfile : Profile
    {
        public ModelToResourceProfile()
        {
            CreateMap<User, UserResource>();
        }
    }
}