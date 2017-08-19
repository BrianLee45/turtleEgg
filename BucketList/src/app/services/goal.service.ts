import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Goal } from '../goal';

@Injectable()
export class GoalService {
  constructor(private _http: Http) {}

  getGoals(): Promise<Goal[]> {
    console.log(`goal.service`);
    return this._http.get('/api/goals')
      .map(data => data.json())
      .toPromise();
  }

  createGoal(goal: Goal): Promise<Goal> {
    console.log(goal);
    return this._http.post('/api/goals', goal)
      .map(data => data.json())
      .toPromise();
  }
}
