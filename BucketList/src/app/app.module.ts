import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { GoalComponent } from './goal/goal.component';

import { UserService } from './services/user.service';
import { GoalService } from './services/goal.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot()
  ],
  providers: [
    UserService,
    GoalService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
