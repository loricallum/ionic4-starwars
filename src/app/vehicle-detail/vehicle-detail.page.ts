import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from '@ionic/angular';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.page.html',
  styleUrls: ['./vehicle-detail.page.scss'],
})
export class VehicleDetailPage implements OnInit {
  vehicle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider) {
  this.vehicle = navParams.get('vehicle');
  }

}
