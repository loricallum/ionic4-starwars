import { Component } from '@angular/core';
import { ApiProvider } from 'src/app/providers/api';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

  constructor(public navCtrl: NavController, public Api: ApiProvider) {
    
  }

}

