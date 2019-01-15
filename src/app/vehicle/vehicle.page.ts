import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from '@ionic/angular';
import { ApiProvider } from './../../providers/api/api';
import { VehicleDetailPage } from './../vehicle-detail/vehicle-detail';

@IonicPage()
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  vehicles: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
  this.presentLoading();
    Api.getVehicles().subscribe(data => {
      this.vehicles = data['results'];
    });
  }

   goToVehicleDetail(vehicle) {
    this.navCtrl.push(VehicleDetailPage, { vehicle: vehicle });
  }

    presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}
