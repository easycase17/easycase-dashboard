import { Component, ViewEncapsulation } from '@angular/core';
import { Route }   from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { configureFacebook, configureGoogle } from '../../../meteor/server/imports/startup/service-config.js';

@Component({
  selector: 'login',
  styleUrls: ['./login.style.scss'],
  templateUrl: './login.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  }
})
export class Login {
  private user: string;
  private password: string;
  constructor(private route: Route) { }

  loginWithPassword() {
    return new Promise(() => {
      Meteor.loginWithPassword(this.user, this.password, (err) => {
        if (err) console.log(err);
        // Redirect to main
      });
    });
  }

  loginWithFacebook() {
    return new Promise(() => {
      Meteor.loginWithFacebook({}, (err) => {
        console.log("There is an error when login with facebook: ", err);
      });
    });
  }

}
