using System.Collections.Generic;
using BriansBlog.Models;
using Microsoft.AspNetCore.Mvc;

namespace BriansBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        BlogContext _context;

        public CategoryController(BlogContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Category>> Get()
        {
            var category = new Category();
            category.Name = "test category";
            _context.Add(category);
            _context.SaveChanges();
            return _context.categories;
        }
    }
}