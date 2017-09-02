import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { GoalComponent } from './goal/goal.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'new',
        component: RegComponent
      }
    ]
  },

  {
    path: 'goal',
    children: [
      {
        path: '',
        component: GoalComponent
      },
      {
        path: 'new',
        component: GoalComponent
      }
    ]
  },

  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
