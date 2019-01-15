import { Component } from '@angular/core';
import { ModalMoviePage } from '../src/app/modal-movie/modal-movie';
import { PeoplePage } from '../src/app/people';
import { SpeciePage } from '../src/app/specie';
import { VehiclePage } from '../src/app/vehicle';
import { PlanetPage } from '../src/app/planet';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HomePage } from '../src/app/home';
import { ListPage } from '../src/app/list';
import { MoviePage } from '../src/app/movie';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MoviePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Movies', component: MoviePage },
      { title: 'Planets', component: PlanetPage },
      { title: 'Vehicles', component: VehiclePage },
      { title: 'People', component: PeoplePage },
      { title: 'Species', component: SpeciePage },
    ];

  }


export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    
    this.nav.setRoot(page.component);
  }
}
