import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from '@ionic/angular';
import { ApiProvider} from './../../providers/api/api';
import { MovieDetailPage } from './../movie-detail/movie-detail';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movies: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Api: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    Api.getMovies().subscribe(data => {
      this.movies = data['results'];
      console.log(this.movies);
    });
  }

  goToMovieDetail(movie) {
    this.navCtrl.push(MovieDetailPage, { movie: movie });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 200
    });
    loader.present();
  }

}
