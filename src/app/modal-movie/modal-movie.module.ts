import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { ModalMoviePage } from './modal-movie.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMoviePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(ModalMoviePage),
    RouterModule.forChild(routes)
  ],
    exports: [
    ModalMoviePage
  ],
  declarations: [ModalMoviePage]
})
export class ModalMoviePageModule {}
