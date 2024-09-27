import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';
import { AuthComponent } from '../admin/auth/auth.component';


const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
   },
   {
    path: 'auth',
    component:AuthComponent,
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
