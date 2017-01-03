import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit {
private showClass: boolean = true;
private showClass1: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
