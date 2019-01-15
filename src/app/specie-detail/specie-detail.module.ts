import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { SpecieDetailPage } from './specie-detail';

import { IonicModule } from '@ionic/angular';

import { SpecieDetailPage } from './specie-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SpecieDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    IonicPageModule.forChild(SpecieDetailPage),
    RouterModule.forChild(routes)
  ],
  
  exports: [
    SpecieDetailPage
  ],
  declarations: [SpecieDetailPage]
})
export class SpecieDetailPageModule {}
