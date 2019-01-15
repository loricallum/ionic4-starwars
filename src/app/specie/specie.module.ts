import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { SpeciePage } from './specie.page';

const routes: Routes = [
  {
    path: '',
    component: SpeciePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    IonicPageModule.forChild(SpeciePage),
    RouterModule.forChild(routes)
  ],
  
  exports: [
    SpeciePage
  ],
  declarations: [SpeciePage]
})
export class SpeciePageModule {}
