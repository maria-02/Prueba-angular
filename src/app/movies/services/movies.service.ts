import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private URL: string = 'https://ghibliapi.herokuapp.com/films/';

  getAllMovies(): Observable<any> {
    return this.http.get(this.URL);
  }

  getOneMovie(movieId: string) {
    return this.http.get(`${this.URL}/${movieId}`);
  }
}
