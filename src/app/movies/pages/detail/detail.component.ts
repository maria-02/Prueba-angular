import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  people: any;
  movies: any;
  loader = true;
  id = this.actRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    // this.moviesService
    //   .getOneMovie(this.actRoute.snapshot.paramMap.get('id')!)
    //   .subscribe((resp) => console.log(resp));
    this.getMoviesFromService();
    this.getCharactersFromService();
  }

  getMoviesFromService() {
    this.moviesService.getOneMovie(this.id!).subscribe((resp) => {
      this.movies = resp;
      this.loader = false;
    });
  }

  getCharactersFromService() {
    this.moviesService.getCharacter(this.id!).subscribe((resp) => {
      this.people = resp;
      console.log(resp);
    });
  }
}
