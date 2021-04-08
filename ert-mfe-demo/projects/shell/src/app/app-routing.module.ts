import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'MFETodo',
    loadChildren: () => 
      import('mfe1/TodoModule')
      .then((m) => {
        return m.TodoModule;
      }),
  },
  {
    path: 'OtherRepo',
    loadChildren: () => 
      import('other1/OtherRepoModule')
      .then((m) => {
        return m.OtherRepoModule;
      }),
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
