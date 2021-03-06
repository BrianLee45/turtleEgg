import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class LoginService {
  constructor(private cookieService: CookieService, private http: Http) {}

  login(user: User): Promise<User> {
    console.log(`login.service: ${user.email}`);
    return this.http.post('/api/login/login', user)
      // .map(response => response.json())
      .map((response: Response) => response.json())
      .toPromise();
  }

  logout(): Promise<User> {
    return this.http.delete('/api/logout')
      .map(data => data.json())
      .toPromise();
  }

  isMellon(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return Boolean(session && expired && userID && expired > Date.now());
  }

  getId(): string {
    return this.cookieService.get('userID');
  }
}
