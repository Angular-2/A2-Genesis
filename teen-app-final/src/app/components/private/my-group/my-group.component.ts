import { Component, OnInit } from '@angular/core';
import { Group } from './../../../models/group';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit {
  private showFirstInput: boolean = true;
  private showSecondInput: boolean = true;
  
  private group: Group

  constructor() {
    this.group = new Group('My Group');
  }

  ngOnInit() {
  }

  addProfilePicture() {
      alert('You have added profile picture successfully.');
      this.showSecondInput = !this.showSecondInput;
  }
}
