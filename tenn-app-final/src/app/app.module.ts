import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routedComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavigationComponent } from './Public/navigation/navigation.component';
import { HowToUseComponent } from './Public/how-to-use/how-to-use.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routedComponents,
    HowToUseComponent
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
