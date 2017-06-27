import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Login } from './login.component';
import { Signup } from './signup.component';

export const routes = [
  { path: '', component: Login, pathMatch: 'full' },
  { path: 'signup', component: Signup, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Login,
    Signup
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginModule {
  static routes = routes;
}
