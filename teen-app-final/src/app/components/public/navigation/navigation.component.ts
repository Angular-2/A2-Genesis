import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private showHiddenClass: boolean = true;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.showHiddenClass = false;
    this.authService.logout();
  }
}
