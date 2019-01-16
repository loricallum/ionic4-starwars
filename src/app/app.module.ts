import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MyApp } from 'src/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from 'src/app/home/home.page';
import { ListPage } from 'src/app/list/list.page';
import { ModalMoviePage } from 'src/app/modal-movie/modal-movie.page';
import { SpecieDetailPage } from 'src/app/specie-detail/specie-detail.page';
import { SpeciePage } from 'src/app/specie/specie.page';
import { PeopleDetailPage } from 'src/app/people-detail/people-detail.page';
import { PeoplePage } from 'src/app/people/people.page';
import { VehicleDetailPage } from 'src/app/vehicle-detail/vehicle-detail.page';
import { VehiclePage } from 'src/app/vehicle/vehicle.page';
import { PlanetDetailPage } from 'src/app/planet-detail/planet-detail.page';
import { PlanetPage } from 'src/app/planet/planet.page';
import { MovieDetailPage } from 'src/app/movie-detail/movie-detail.page';
import { MoviePage } from 'src/app/movie/movie.page';
import { HttpModule } from '@angular/http';
import { ErrorHandler } from '@angular/core';
//import { IonApp, IonicErrorHandler } from '@ionic/angular';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MoviePage,
    MovieDetailPage,
    PlanetPage,
    PlanetDetailPage,
    VehiclePage,
    VehicleDetailPage,
    PeoplePage,
    PeopleDetailPage,
    SpeciePage,
    SpecieDetailPage,
    ModalMoviePage
  ],

  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MoviePage,
    MovieDetailPage,
    PlanetPage,
    PlanetDetailPage,
    VehiclePage,
    VehicleDetailPage,
    PeoplePage,
    PeopleDetailPage,
    SpeciePage,
    SpecieDetailPage,
    ModalMoviePage
  ],
  
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [MyApp]
})
export class AppModule {}
