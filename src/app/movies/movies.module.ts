import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesCardComponent } from './components/movies-card/movies-card.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    DetailComponent,
    HomeComponent,
    MoviesListComponent,
    MoviesCardComponent,
    PagenotfoundComponent,
    MainComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, MaterialModule],
})
export class MoviesModule {}
