import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoggedInGuard } from './guards/loggedIn.guard'


export const ROUTES: Routes = [{
   path: '', redirectTo: 'app', pathMatch: 'full' }, 
   { path: 'app',   loadChildren: './layout/layout.module#LayoutModule', canActivate: [LoggedInGuard] }, 
   { path: 'home',  loadChildren: './home/home.module#HomeModule' },
   { path: 'login', loadChildren: './login/login.module#LoginModule' }, 
   { path: 'error', component: ErrorComponent }, 
   { path: '**',    component: ErrorComponent }
];
