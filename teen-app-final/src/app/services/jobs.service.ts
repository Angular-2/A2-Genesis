import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class JobsService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
    }

    getMostRecent(): Promise<any> {
        return this.http
            .get('http://localhost:3000/jobs', this.options)
            .toPromise()
            .then((response: Response) => {
                let result = response.json();
                // TO DO
            });
    }

    getAll() {
        return this.http
            .get('http://localhost:3000/jobs', this.options)
            .toPromise()
            .then((response: Response) => {
                let result = response.json();
                // TO DO
            });
    }
}