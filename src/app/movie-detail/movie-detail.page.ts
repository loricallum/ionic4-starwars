import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from '@ionic/angular';
import { ModalMoviePage } from './../modal-movie/modal-movie';

@IonicPage()
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.movie = navParams.get('movie');

  }

  presentModal(data, type) {
    let modal = this.modalCtrl.create(ModalMoviePage, {data: data, type:type});
    modal.present();
  }

}
