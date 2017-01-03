import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Group } from './../models/group';

@Injectable()
export class GroupsService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
    }

    create(group: Group) {
        return this.http
        .post('http://localhost:3000/groups', JSON.stringify(group), this.options)
        .toPromise()
        .then(response =>{
            response.json().data 
        })
        .catch(er => alert(JSON.parse(er._body).error));
    }
}