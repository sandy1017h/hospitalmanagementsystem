import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalHomeComponent } from './hospital/hospital-home/hospital-home.component';


const routes: Routes = [
  { path: 'home', component:HospitalHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HospitalHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
