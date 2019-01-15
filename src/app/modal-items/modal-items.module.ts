import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { ModalItemsPage } from './modal-items.page';

const routes: Routes = [
  {
    path: '',
    component: ModalItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(ModalItemsPage),
    RouterModule.forChild(routes)
  ],
  declarations: [ModalItemsPage]
})
export class ModalItemsPageModule {}
