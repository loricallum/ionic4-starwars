import { Component, OnInit } from '@angular/core';
import { ApiProvider } from './../../providers/api/api';
import { IonicPage, NavController, NavParams } from '@ionic/angular';
@IonicPage()
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.page.html',
  styleUrls: ['./planet-detail.page.scss'],
})
export class PlanetDetailPage implements OnInit {
  planet: any;
  films: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider) {
    this.planet = navParams.get('planet');
    this.addFilms(this.planet.films);
    console.log(this.planet);
  }

  addFilms(urls){
    for(let url of urls ){
      // this.films.push(this.getItems(url));
      console.log(url);
    }
  }

  getItems(url) {
    this.Api.getItems(url).subscribe(data => {
      return data;
    });
  }

}