import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import { AppComponent }  from './app.component';
import { ROUTES } from './app.routes';

import { ErrorComponent } from './error/error.component';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    LayoutModule,
    AuthModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }