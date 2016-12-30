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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routedComponents,
    HowToUseComponent,
    AboutUsComponent,
    TeenJobsComponent,
    ParentGuideComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
