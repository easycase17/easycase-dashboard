import { Component, ViewEncapsulation } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { configureFacebook, configureGoogle } from '../../../meteor/server/imports/startup/service-config.js';

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './login.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  }
})
export class Login {
  private user: string;
  private password: string;
  constructor() { }

  loginWithPassword() {
    Meteor.loginWithPassword(this.user, this.password, (err) => {
      console.log(err);
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
