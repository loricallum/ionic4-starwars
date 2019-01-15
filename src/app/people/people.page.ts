import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from '@ionic/angular';
import { ApiProvider } from './../../providers/api/api';
import { PeopleDetailPage } from './../people-detail/people-detail';
@IonicPage()
@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  peoples: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    Api.getPeoples().subscribe(data => {
      this.peoples = data['results'];
    });
  }

  goToPeopleDetail(people) {
    this.navCtrl.push(PeopleDetailPage, { people: people });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}
