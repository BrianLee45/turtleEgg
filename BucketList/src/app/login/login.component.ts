import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user: User = new User();
  loginErrors: string[] = [];

  constructor(private login: LoginService, private router: Router) { }

  onSubmit(user: User) {

    console.log('logging in', user);
    this.login.login(user)
      .then(() => this.router.navigate(['goal']))
      .then(response => {
        console.log(this.login.getId());
      })

      .catch(response => this.errorHandler(response))
  }

  private errorHandler(errors: string[] | Error) {
    console.log(errors);
    this.loginErrors = Array.isArray(errors) ? errors : [errors.message];
  }

}
