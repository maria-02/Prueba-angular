import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './movies/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
