import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from '@ionic/angular';
import { ApiProvider } from './../../providers/api/api';
import { PlanetDetailPage } from './../planet-detail/planet-detail';

@IonicPage()
@Component({
  selector: 'app-planet',
  templateUrl: './planet.page.html',
  styleUrls: ['./planet.page.scss'],
})
export class PlanetPage implements OnInit {

  planets: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    Api.getPlanets().subscribe(data => {
      this.planets = data['results'];
    });
  }

  goToPlanetDetail(planet) {
    this.navCtrl.push(PlanetDetailPage, { planet: planet });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}

