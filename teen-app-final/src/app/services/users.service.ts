import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UsersService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    return this.http.get('/users').map(res => (res.json()));
}

  addUser(user: any): any{
    //return this.http.post('/users', JSON.stringify(user), this.options);
    
    return this.http
      .post('http://localhost:3000/users', JSON.stringify(user), this.options)
      .toPromise()
      .then(response => response.json().data)
      .catch((er) => console.log(er));
  }
}