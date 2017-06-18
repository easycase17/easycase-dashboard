import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { ROUTES }       from './layout.routes';
import { Layout } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    // ROUTES,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    Layout,
    // Sidebar,
    NavbarComponent
    // ChatSidebar,
    // SearchPipe,
    // Notifications,
    // NotificationLoad,
    // ChatMessage
  ]
})
export class LayoutModule {
}