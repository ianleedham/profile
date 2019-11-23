using BriansBlog.Models;
using Microsoft.EntityFrameworkCore;

namespace BriansBlog {
    public class BlogContext : DbContext 
    {    public BlogContext(DbContextOptions<BlogContext> options) : base(options) { }

        public DbSet<Post> posts { get; set; }

        public DbSet<Category> categories { get; set; } 
    }
}