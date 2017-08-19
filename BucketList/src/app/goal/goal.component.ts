import { Component, OnInit } from '@angular/core';

import { Goal } from '../goal';
import { GoalService } from '../services/goal.service';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html'
})

export class GoalComponent implements OnInit {

  goals: Array<Goal> = [];
  users: Array<User> = [];

  constructor(private goalService: GoalService, private userService: UserService) {}

  ngOnInit() {
    this.getGoals();
    this.userService.getUsers()
      .then(users => {
        console.log(users);
        this.users = users;
      })
      .catch(() => {});
  }

  getGoals() {
    console.log('goal.component');
    this.goalService.getGoals()
      .then(goals => {
        console.log(goals)
        this.goals = goals;
      })
      .catch(console.log);
  }

  onSubmit(goal: Goal) {
    console.log('goal.component: onSubmit');
    this.goalService.createGoal(goal)
      .then(goal => this.goals.push(goal))
      .catch(console.log);
  }

}
