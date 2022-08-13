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

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.paramMap.get('id'));

    this.moviesService
      .getOneMovie(
        this.actRoute.snapshot.paramMap.get('id') ||
          '2baf70d1-42bb-4437-b551-e5fed5a87abe'
      )
      .subscribe((resp) => console.log(resp));
  }
}
