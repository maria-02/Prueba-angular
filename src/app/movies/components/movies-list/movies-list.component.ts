import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies: any;
  loader = true;

  ngOnInit(): void {
    this.getMoviesFromService();
  }

  getMoviesFromService() {
    this.moviesService.getAllMovies().subscribe((resp) => {
      this.movies = resp;
      this.loader = false;
    });
  }
}
