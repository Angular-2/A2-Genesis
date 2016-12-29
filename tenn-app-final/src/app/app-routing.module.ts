import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './Public/register/register.component';
import { LoginComponent } from './Public/login/login.component';
import { HowToUseComponent } from './Public/how-to-use/how-to-use.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'how-to-use',
    component: HowToUseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [ RegisterComponent, LoginComponent, HowToUseComponent ];