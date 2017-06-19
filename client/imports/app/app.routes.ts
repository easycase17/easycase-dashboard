import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { Layout } from './layout/layout.component';
import { Auth } from './auth/auth.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home',    component: Layout }, 
    { path: 'auth',   component: Auth }, 
    { path: 'error', component: ErrorComponent }, 
    { path: '**',    component: ErrorComponent }
];
