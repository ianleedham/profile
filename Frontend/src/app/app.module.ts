import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';

import {
  MatButtonModule, MatListModule, MatCheckboxModule,
  MatIconModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { OccupationComponentComponent } from './occupation-component/occupation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogsListComponent,
    CreateBlogPostComponent,
    LandingComponentComponent,
    SkillsComponentComponent,
    OccupationComponentComponent,
  ],
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
