using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BriansBlog.Models
{
    public class Post
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }
        
        public Category category { get; set; }

        public string body { get; set; }

        public string  title { get; set; }

        // public IdentityUser author { get; set; }
    }
}