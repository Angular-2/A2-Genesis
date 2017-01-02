import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routedComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/public/navigation/navigation.component';
import { HowToUseComponent } from './components/public/how-to-use/how-to-use.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { TeenJobsComponent } from './components/public/teen-jobs/teen-jobs.component';
import { ParentGuideComponent } from './components/public/parent-guide/parent-guide.component';
import { ContactsComponent } from './components/public/contacts/contacts.component';
import { HomeComponent } from './components/public/home/home.component';
import { FooterComponent } from './components/public/footer/footer.component';


import { AuthGuard } from './services/can.deactivate.guard'
import { UsersService } from './services/users.service';
import { AuthenticationService } from './services/authentication.service';
import { MyProfileComponent } from './components/private/my-profile/my-profile.component';
import { UpdateInfoComponent } from './components/private/update-info/update-info.component';
import { JobsComponent } from './components/private/jobs/jobs.component';
import { MyGroupComponent } from './components/private/my-group/my-group.component';
import { SingleJobComponent } from './components/private/single-job/single-job.component';
import { AddJobComponent } from './components/private/add-job/add-job.component';
import { DonateComponent } from './components/public/donate/donate.component';
import { AddTaskComponent } from './components/private/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routedComponents,
    HowToUseComponent,
    AboutUsComponent,
    TeenJobsComponent,
    ParentGuideComponent,
    ContactsComponent,
    HomeComponent,
    FooterComponent,
    MyProfileComponent,
    UpdateInfoComponent,
    JobsComponent,
    MyGroupComponent,
    SingleJobComponent,
    AddJobComponent,
    DonateComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
