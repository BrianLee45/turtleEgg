import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html'
})

export class RegComponent implements OnInit {

  user: User = new User();
  users: Array<User> = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(users => this.users = users)
      .catch(() => {});
  }

  onSubmit(userInput: User): void {
    console.log(userInput);

    this.userService.createUser(userInput)
      .then(() => this.router.navigate(['user']))
      .catch(console.log);
  }
}
