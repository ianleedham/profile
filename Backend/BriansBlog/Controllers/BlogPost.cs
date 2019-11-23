using System.Collections.Generic;
using BriansBlog.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace BriansBlog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {
        BlogContext _context;

        public BlogPostController(BlogContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetPosts(){
            return Ok(_context.posts.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Post> Get(int id)
        {
            var category = _context.categories.FirstOrDefault();
            var post = new Post(){
                category = category,
                title = "KnockoutJs in 2019",
                body = @"Knockout is a little mentioned front-end JavaScript framework capable of enabling SPAs and the creation of interactive immersive web experiences. Knockout is an open source framework developed by Steve Sanderson with its initial release in July 5, 2010. It follows the Model-View-ViewModel pattern using observables to make your UI automatically stay in sync with an underlying data model. 
  
                        The good.
                        Knockout has been developed to follow the principles of MVVM very well. That facilitates a separation of development of the graphical user interface and the JavaScript models. 
                        It is a small framework quoted as 13kb after gzipping on knockoutjs.com. this means that it does what it’s designed to but is extensive when required and it is easy to create your own extensions as it’s open source. 
                        Being open source also means it can be trusted and if you discover a bug it is relatively easy to raise it as an issue or fix it yourself.  
                        It is also very mature compared with some of the more popular frameworks being used this means it’s stable. Its maturity combined with the fact it’s not designed to be a large all singing all dancing framework means it is extremely polished. 
                        
                        The bad.
                        It has less tools included compared to some of the bigger frameworks which means you have to install extra packages as they aren’t already there.
                        With out Knockout decorators which are an extension on knockout it can be fiddley always having to add parenthesis and other syntactical issues. Luckily Knockout decorators provide the syntactical sugar to make it the code easy to work with and read.
                        The ugly
                        Doesn’t work with JQuery and its library of intensions which can be a problem if you, like me, you work in a company which insists you use JQuery tools for date time pickers and searchable drop downs ect. 
                        
                        Competitors
                        Is it still viable? Used?
                        Knockouts last stable release was February 22, 2019 which was 4 months ago. This shows work is still going on and the github account also has hundreds of pull requests which are mainly extensions which can be added on. This shows work is still very much going on. 
                        If you want a simple MVVM JavaScript framework that gets the job done and is open source this is what you want. If you want it but don’t like open source, then you may prefer ReactJS. If you don’t like opensource or having to add extensions, you may prefer angular. 
                        
                        Whatever you choose I hope you enjoy programming!",
            };
            return Ok(post);
        }

        [HttpPost()]
        public IActionResult Create(Post post){
            _context.Add(post);
            _context.SaveChanges();
            return CreatedAtRoute("posts", post);
        }
    }
}