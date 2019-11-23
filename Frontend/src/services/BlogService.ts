import { Injectable } from '@angular/core';
import { Post } from 'src/classes/Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class BlogService {

  apiURL = "http://localhost:5000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`../assets/post-${id}.json`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`../assets/posts.json`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling 
   handleError(error) {
    console.log("error");

    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      console.log(errorMessage);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(errorMessage);
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}