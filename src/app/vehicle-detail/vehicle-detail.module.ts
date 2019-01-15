import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { VehicleDetailPage } from './vehicle-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(VehicleDetailPage),
    RouterModule.forChild(routes)
  ],
  
  exports: [
    VehicleDetailPage
  ],
  declarations: [VehicleDetailPage]
})
export class VehicleDetailPageModule {}
