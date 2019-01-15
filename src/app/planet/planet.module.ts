import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { PlanetPage } from './planet.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(PlanetPage),
    RouterModule.forChild(routes)
  ],
  exports: [
    PlanetPage
  ],
  declarations: [PlanetPage]
})
export class PlanetPageModule {}
