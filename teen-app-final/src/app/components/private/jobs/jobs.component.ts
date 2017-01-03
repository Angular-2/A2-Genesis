import { Component, OnInit } from '@angular/core';
import { Job } from './../../../models/job';
import { JobsService } from './../../../services/jobs.service'; 

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  private jobs: Job[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getAllJobs()
      .then(result => {
        for (let i: number = 0; i < result.length; i += 1) {
          let job = result[i];
          let currentJob: Job = new Job(job.title, job.workHours, job.salary, job.description, job.author, job.pictureUrl);
          currentJob.id = job._id;

          this.jobs.push(currentJob);
        }
      });    
  }

  getAllJobs(): any {
    return this.jobsService.getAllJobs(); 
  }

  compareJobs(leftJob, rightJob) {
    if (leftJob.title < rightJob.title)
      return -1;
    if (leftJob.title > rightJob.title)
      return 1;
    return 0;
  }

  sortJobs() {
    this.jobs.sort(this.compareJobs);
  }
}
