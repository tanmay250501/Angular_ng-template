import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'billing',
    component:BillingComponent
  },
  {
    path:'doctor',
    component:DoctorComponent
  },
  {
    path:'patients',
    component:PatientsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
