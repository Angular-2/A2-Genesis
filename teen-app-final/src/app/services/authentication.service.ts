import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    public token: string;

    constructor(private http: Http, private router: Router) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): any {
        var user = { username, password };
        return this.http
            .post('http://localhost:3000/authenticate', JSON.stringify(user), this.options)
            .toPromise()
            .then((response: Response) => {
                let token = response.json() && response.json().id_token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    
                    alert("You have logged in successfully");
                    this.router.navigateByUrl('/home');
                    

                    return true;
                } 
                else {
                    alert("Wrong password or username. Please try again");
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): Boolean {
        if(localStorage.hasOwnProperty('currentUser')) {
            return true;
        }
        else{
            return false;
        }
    }
}