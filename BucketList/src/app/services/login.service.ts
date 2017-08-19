import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class LoginService {
  constructor(private http: Http, private cookieService: CookieService) {}

  login(user: User): Promise<User> {
    return this.http.post('/api/login', user)
      .map(response => response.json())
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
}
