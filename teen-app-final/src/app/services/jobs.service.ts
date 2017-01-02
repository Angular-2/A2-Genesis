import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Job } from './../models/job';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class JobsService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private router: Router) {
    }

    addJob(job: Job): any{
        return this.http
            .post('http://localhost:3000/jobs', JSON.stringify(job), this.options)
            .toPromise()
            .then(response =>{
                this.router.navigateByUrl('/jobs');
                alert("You have created job successfully.");
                response.json().data 
            })
            .catch(er => alert(JSON.parse(er._body).error));
  }

    // getMostRecent(): Promise<any> {
    //     return this.http
    //         .get('http://localhost:3000/jobs', this.options)
    //         .toPromise()
    //         .then((response: Response) => {
    //             let result = response.json();
    //             // TO DO
    //         });
    // }

    getAllJobs() {
        return this.http
            .get('http://localhost:3000/jobs', this.options)
            .toPromise()
            .then((response: Response) => response.json());
    }

    getJobById(id: string) {
        return this.http
            .get('http://localhost:3000/jobs/' + id)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(er => alert(JSON.parse(er._body).error));
    }
}