import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPage } from './movie-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    IonicPageModule.forChild(MovieDetailPage),
    RouterModule.forChild(routes)
  ],
  
  exports: [
    MovieDetailPage
  ],
  declarations: [MovieDetailPage]
})
export class MovieDetailPageModule {}
