import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';
import { User } from './../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.model = new User('', '', '', '', '', '');
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password);
  }
}
