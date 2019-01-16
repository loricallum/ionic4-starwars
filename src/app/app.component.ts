
import { ModalMoviePage } from 'src/app/modal-movie/modal-movie.page';
import { PeoplePage } from 'src/app/people/people.page';
import { SpeciePage } from 'src/app/specie/specie.page';
import { VehiclePage } from 'src/app/vehicle/vehicle.page';
import { PlanetPage } from 'src/app/planet/planet.page';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HomePage } from 'src/app/home/home.page';
import { ListPage } from 'src/app/list/list.page';
import { MoviePage } from 'src/app/movie/movie.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class MyApp {
  @ViewChild(NavController) nav:NavController;

  rootPage: any = MoviePage;

  pages: Array<{title: string, component: any}>;
  initializeApp: any;

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


// const class AppComponent {
//   public appPages = [
//     {
//       title: 'Home',
//       url: '/home',
//       icon: 'home'
//     },
//     {
//       title: 'List',
//       url: '/list',
//       icon: 'list'
//     }
//   ];
//   platform: any;
//   statusBar: any;
//   splashScreen: any;

// constructor(
// //     private platform: Platform,
// //     private splashScreen: SplashScreen,
// //     private statusBar: StatusBar,
// private nav: NavController
// ) {
// //     this.initializeApp();
// //   }

//   initializeApp() {
//     this.platform.ready().then(() => {
      
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();
//     });
//   }

  openPage(page) {
    
    this.nav.setRoot(page.component);
  }
}
