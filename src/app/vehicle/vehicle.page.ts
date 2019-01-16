import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { ApiProvider } from 'src/app/providers/api';
import { VehicleDetailPage } from 'src/app/vehicle-detail/vehicle-detail.page';

//@IonicPage()
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage {
  vehicles: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
  this.presentLoading();
    Api.getVehicles().subscribe(data => {
      this.vehicles = data['results'];
    });
  }

   goToVehicleDetail(vehicle) {
    this.navCtrl.navigateRoot('/VehicleDetailPage');//, { vehicle: vehicle });
  }

    presentLoading() {
    let loader = this.loadingCtrl.create({
      //content: "Please wait...",
      duration: 200
    });
    //loader.present();
  }

}
