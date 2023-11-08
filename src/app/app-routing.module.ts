import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleComponent} from './single/single.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'single/:id', component: SingleComponent },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
