import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './main-body/main-body.component';
import { DonateBloodComponent } from './donate-blood/donate-blood.component';
import { SearchDonarComponent } from './search-donar/search-donar.component';


const routes: Routes = [

  {
    path: '', component: MainBodyComponent
  },
  {
    path: 'donateBlood', component: DonateBloodComponent
  },
  {
    path: 'searchBlood', component: SearchDonarComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
