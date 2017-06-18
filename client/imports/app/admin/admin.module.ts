import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Admin } from './admin.component';

export const routes = [
  { path: '', component: Admin, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Admin
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule {
  static routes = routes;
}
