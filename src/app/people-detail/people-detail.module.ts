import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { PeopleDetailPage } from './people-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PeopleDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    IonicPageModule.forChild(PeopleDetailPage),
    RouterModule.forChild(routes)
  ],
  
  exports: [
    PeopleDetailPage
  ],
  declarations: [PeopleDetailPage]
})
export class PeopleDetailPageModule {}
