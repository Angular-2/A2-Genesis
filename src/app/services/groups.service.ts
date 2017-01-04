import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Group } from './../models/group';

@Injectable()
export class GroupsService {
    private headers: Headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
    }

    create(group: Group): any {
        return this.http
        .post('/api/groups', JSON.stringify(group), this.options)
        .toPromise()
        .then(response =>{
            response.json().data 
        })
        .catch(er => alert(JSON.parse(er._body).error));
    }
}