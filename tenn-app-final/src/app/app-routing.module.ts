import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { HowToUseComponent } from './components/public/how-to-use/how-to-use.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { ContactsComponent } from './components/public/contacts/contacts.component';
import { ParentGuideComponent } from './components/public/parent-guide/parent-guide.component';
import { TeenJobsComponent } from './components/public/teen-jobs/teen-jobs.component';
import { HomeComponent } from './components/public/home/home.component';
import { FooterComponent } from './components/public/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'parent-guide',
    component: ParentGuideComponent
  },
  {
    path: 'teen-jobs',
    component: TeenJobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [ RegisterComponent, LoginComponent, HowToUseComponent, AboutUsComponent, ContactsComponent, ParentGuideComponent, TeenJobsComponent, HomeComponent, FooterComponent ];