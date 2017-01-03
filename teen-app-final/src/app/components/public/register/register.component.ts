import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../services/users.service';
import { GroupsService } from './../../../services/groups.service';
import { User } from './../../../models/user'
import { Group } from './../../../models/group';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: User;

  constructor(private userService: UsersService, private groupService: GroupsService) { }

  ngOnInit() {
    this.model = new User('', '', '', '', '', '');
  }

  add() {
    this.userService.addUser(this.model);
    this.groupService.create(new Group("My Group"));
  }

}
