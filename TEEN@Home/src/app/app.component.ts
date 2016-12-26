/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
*/

// Import the Component decorator
import { Component } from '@angular/core';

@Component({
  // We'll call our root component daily-deals
  selector: 'daily-deals',
  template: `
  <div class="container">
    <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/dashboard"></a>
        </div>
        <!-- On the left side of our navbar we'll display the two links for public and private deals -->
        <ul class="nav navbar-nav">
          <li>
            <a routerLink="/deals" routerLinkActive="active">Deals</a>
          </li>
          <li>
            <a routerLink="/special" routerLinkActive="active">Private Deals</a>
          </li>
        </ul>
        <!-- On the right side of our navbar we'll display the login and logout actions depending on user state -->
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a>Log In</a>
          </li>
          <li>
            <a>Log Out</a>
          </li>
        </ul>
    </nav>
    <div class="col-sm-12">
      <!-- The router-outlet directive will display the component based on the route we are on, more on this soon -->
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  // We'll add an inline style to properly display the navbar
  styles : ['.navbar-right { margin-right: 0px !important}']
})
export class AppComponent {

  title = 'Daily Deals';

  constructor() {}
}