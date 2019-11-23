import { Component, OnInit } from '@angular/core';
import { Post } from 'src/classes/Post';
import { BlogService } from 'src/services/BlogService';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.sass']
})
export class CreateBlogPostComponent implements OnInit {
  
  public post = new Post();
  public categories = [];

  constructor(private postService: BlogService) { }

  ngOnInit() {
  }

  submitForm(){

  }

}
