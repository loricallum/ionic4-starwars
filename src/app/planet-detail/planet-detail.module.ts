import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { PlanetDetailPage } from './planet-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    IonicPageModule.forChild(PlanetDetailPage),
    RouterModule.forChild(routes)
  ],
  
  exports: [
    PlanetDetailPage
  ],
  declarations: [PlanetDetailPage]
})
export class PlanetDetailPageModule {}
