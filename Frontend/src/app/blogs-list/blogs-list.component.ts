import { Component, OnInit } from '@angular/core';
import { Post } from 'src/classes/Post';
import { BlogService } from 'src/services/BlogService';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.sass']
})
export class BlogsListComponent implements OnInit {

  posts: Array<Post>;

  constructor(private postService: BlogService) {

  }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });

    this.posts = [];

    console.log(this.posts);
  }

}
