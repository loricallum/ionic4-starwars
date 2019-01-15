import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.selectedItem = navParams.get('item');
  }
}

