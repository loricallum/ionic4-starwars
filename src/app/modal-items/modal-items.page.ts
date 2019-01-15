import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from '@ionic/angular';


@IonicPage()
@Component({
  selector: 'app-modal-items',
  templateUrl: './modal-items.page.html',
  styleUrls: ['./modal-items.page.scss'],
})
export class ModalItemsPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = navParams.get('items');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalItemsPage');
  }

}
