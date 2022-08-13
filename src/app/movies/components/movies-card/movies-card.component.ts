import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss'],
})
export class MoviesCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() movie: any;

  ngOnInit(): void {}
}
