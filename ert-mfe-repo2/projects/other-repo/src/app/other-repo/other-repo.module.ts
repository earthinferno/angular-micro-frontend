import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OtherRepoComponent } from './other-repo.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [OtherRepoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OtherRepoComponent,
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
  ],
  exports: [
    OtherRepoComponent
  ]
})
export class OtherRepoModule { }
