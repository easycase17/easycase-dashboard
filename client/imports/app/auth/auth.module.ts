import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Auth } from './auth.component';

export const routes = [
  { path: '', component: Auth, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Auth
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule {
  static routes = routes;
}
