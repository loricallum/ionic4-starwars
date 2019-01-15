import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from '../src/app/home';
import { ListPage } from '../src/app/list';
import { ModalMoviePage } from './../src/app/modal-movie';
import { SpecieDetailPage } from './../src/app/specie-detail';
import { SpeciePage } from './../src/app/specie';
import { PeopleDetailPage } from './../src/app/people-detail';
import { PeoplePage } from './../src/app/people';
import { VehicleDetailPage } from './../src/app/vehicle-detail';
import { VehiclePage } from './../src/app/vehicle';
import { PlanetDetailPage } from './../src/app/planet-detail/planet-detail.page';
import { PlanetPage } from './../src/app/planet/planet.page';
import { MovieDetailPage } from './../src/app/movie-detail/movie-detail.page';
import { MoviePage } from 'src/app/movie/movie.page';
import { HttpModule } from '@angular/http';
import { ErrorHandler } from '@angular/core';
import { IonApp, IonicErrorHandler } from '@ionic/angular';



@NgModule({
  declarations: [
    AppComponent,
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
    AppComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule {}
