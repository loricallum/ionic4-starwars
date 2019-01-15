import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from '@ionic/angular';

@IonicPage()
@Component({
  selector: 'app-specie-detail',
  templateUrl: './specie-detail.page.html',
  styleUrls: ['./specie-detail.page.scss'],
})
export class SpecieDetailPage implements OnInit {
  specie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.specie = navParams.get('specie');
  }


}
