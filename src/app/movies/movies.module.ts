import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesCardComponent } from './components/movies-card/movies-card.component';

@NgModule({
  declarations: [
    DetailComponent,
    HomeComponent,
    MoviesListComponent,
    MoviesCardComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, MaterialModule],
})
export class MoviesModule {}
