import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UsersService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private router: Router) { }

  getUsers(): any {
    return this.http
      .get('/api/users')
      .toPromise()
      .then(response => {
        response.json().data 
      })
      .catch(er => alert(JSON.parse(er._body).error));
}

  addUser(user: any): any{
    return this.http
      .post('/api/users', JSON.stringify(user), this.options)
      .toPromise()
      .then(response =>{
        this.router.navigateByUrl('/login');
        alert("You have registered successfully");
        response.json().data 
      })
      .catch(er => alert(JSON.parse(er._body).error));
  }

  getUserByUsername(username: string): any {
    return this.http
      .get('/api/users/' + username)
      .toPromise()
      .catch(er => alert(JSON.parse(er._body).error));
  }

  updateUser(user: any) :any {
    return this.http
      .post('/api/users/update', JSON.stringify(user), this.options)
      .toPromise()
      .catch(er => alert(JSON.parse(er._body).error));
  }
}