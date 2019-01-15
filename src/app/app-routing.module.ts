import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'movie', loadChildren: './movie/movie.module#MoviePageModule' },
  { path: 'movie-detail', loadChildren: './movie-detail/movie-detail.module#MovieDetailPageModule' },
  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'people-detail', loadChildren: './people-detail/people-detail.module#PeopleDetailPageModule' },
  { path: 'planet', loadChildren: './planet/planet.module#PlanetPageModule' },
  { path: 'planet-detail', loadChildren: './planet-detail/planet-detail.module#PlanetDetailPageModule' },
  { path: 'specie', loadChildren: './specie/specie.module#SpeciePageModule' },
  { path: 'specie-detail', loadChildren: './specie-detail/specie-detail.module#SpecieDetailPageModule' },
  { path: 'vehicle', loadChildren: './vehicle/vehicle.module#VehiclePageModule' },
  { path: 'vehicle-detail', loadChildren: './vehicle-detail/vehicle-detail.module#VehicleDetailPageModule' },
  { path: 'item-detail', loadChildren: './item-detail/item-detail.module#ItemDetailPageModule' },
  { path: 'providers', loadChildren: './providers/providers.module#ProvidersPageModule' },
  { path: 'modal-items', loadChildren: './modal-items/modal-items.module#ModalItemsPageModule' },
  { path: 'modal-movie', loadChildren: './modal-movie/modal-movie.module#ModalMoviePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
