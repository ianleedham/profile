import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/services/BlogService';
import { Post } from 'src/classes/Post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  public post = new Post();
  id: string;

  constructor(private postService: BlogService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    });
    this.postService.getPost(this.id)
    .subscribe((data) => {
      this.post = data;
      console.log(this.post)
    });
  }

}
