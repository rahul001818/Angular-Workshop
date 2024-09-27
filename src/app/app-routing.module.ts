import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ResourceComponent } from './resource/resource.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthComponent } from './admin/auth/auth.component';
import {authGuard} from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(e => e.AdminModule) //lazy loading
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'resources',
    component: ResourceComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authGuard]
    
  },
  {
    path: 'register',
    children: [
      {
        path: '',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      },
    ]
  },
  {
    path: '',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
