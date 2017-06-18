import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
 
import { AppComponent }  from './app.component';
import { ROUTES } from './app.routes';

import { ErrorComponent } from './error/error.component';
import { LayoutModule } from './layout/layout.module';
import { AdminModule } from './admin/admin.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    LayoutModule,
    AdminModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }