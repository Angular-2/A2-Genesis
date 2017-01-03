import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit {
  isParent: boolean;

  constructor() { }

  ngOnInit() {
    if (localStorage['role'] == 'parent') {
      this.isParent = true;
    } else{
      this.isParent = false;
    }
  }

}
