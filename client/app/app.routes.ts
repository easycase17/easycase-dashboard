import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
   path: '', redirectTo: 'app', pathMatch: 'full' }, 
   { path: 'app',   loadChildren: './layout/layout.module#LayoutModule' }, 
   { path: 'home',  loadChildren: './home/home.module#HomeModule' },
   { path: 'login', loadChildren: './login/login.module#LoginModule' }, 
   { path: 'error', component: ErrorComponent }, 
   { path: '**',    component: ErrorComponent }
];
