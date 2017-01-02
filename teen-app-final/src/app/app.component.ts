import { Component } from '@angular/core';
import { NavigationComponent } from './components/public/navigation/navigation.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LoginComponent } from './components/public/login/login.component';
import { HowToUseComponent } from './components/public/how-to-use/how-to-use.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { ContactsComponent } from './components/public/contacts/contacts.component';
import { ParentGuideComponent } from './components/public/parent-guide/parent-guide.component';
import { TeenJobsComponent } from './components/public/teen-jobs/teen-jobs.component';
import { HomeComponent } from './components/public/home/home.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { MyProfileComponent } from './components/private/my-profile/my-profile.component';
import { UpdateInfoComponent } from './components/private/update-info/update-info.component';
import { JobsComponent } from './components/private/jobs/jobs.component';
import { MyGroupComponent } from './components/private/my-group/my-group.component';
import { SingleJobComponent } from './components/private/single-job/single-job.component';
import { AddJobComponent } from './components/private/add-job/add-job.component';
import { DonateComponent } from './components/public/donate/donate.component';
import { AddTaskComponent } from './components/private/add-task/add-task.component';

@Component({
  selector: `app-root`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {
}
