import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  constructor(private login: LoginService, private router: Router) {}

  isMellon(): boolean {
    return this.login.isMellon();
  }

  logout() {
    this.login.logout()
      .then(() => this.router.navigate(['home']))
      .catch(() => {});
  }
}
