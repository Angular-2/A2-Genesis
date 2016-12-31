import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    public token: string;

    constructor(private http: Http) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): any {
        console.log(password)
        var user = { username, password };
        console.log(user);
        console.log(JSON.stringify(user));
        return this.http
            .post('http://localhost:3000/authenticate', JSON.stringify(user), this.options)
            .toPromise()
            .then((response: Response) => {
                let token = response.json() && response.json().id_token;
                console.log(token);
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    return true;
                } 
                else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}