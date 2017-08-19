import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class UserService {
  constructor(private _http: Http) {}

  getUsers(): Promise<User[]> {
    console.log(`user.service`);
    return this._http.get('/api/users')
      .map(data => data.json())
      .toPromise();
  }

  createUser(user: User): Promise<User> {
    console.log(user);
    return this._http.post('/api/users', user)
      .map(data => data.json())
      .toPromise();
  }
}
