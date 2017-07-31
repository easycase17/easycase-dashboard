import { Component, ViewEncapsulation } from '@angular/core';
import { Router }   from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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
  constructor(private router: Router) { }

  loginWithPassword() {
    return new Promise(() => {
      Meteor.loginWithPassword(this.user, this.password, (err) => {
        if (err) {
          console.log(err);
        }
        // Redirect to main
        else {
          this.router.navigate(['/']);
        }
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
