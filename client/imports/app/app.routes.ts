import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { Layout } from './layout/layout.component';
import { Admin } from './admin/admin.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home',    component: Layout }, 
    { path: 'admin',   component: Admin }, 
    { path: 'error', component: ErrorComponent }, 
    { path: '**',    component: ErrorComponent }
];
