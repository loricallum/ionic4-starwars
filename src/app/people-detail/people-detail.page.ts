import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from '@ionic/angular';
@IonicPage()
@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.page.html',
  styleUrls: ['./people-detail.page.scss'],
})
export class PeopleDetailPage implements OnInit {
  people: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = navParams.get('people');
  }


}
