import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'reg',
    component : RegistrationComponent
  },
  {
    path : 'viewEmployees',
    component : ViewEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
