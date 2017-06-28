import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

@Component({
    selector: 'signup',
    styleUrls: ['./login.style.scss'],
    templateUrl: './signup.template.html',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'login-page app'
    }
})
export class Signup implements OnInit {
    private user: {
        username: string,
        password: string,
        email: string,
        firstname: string,
        lastname: string,
        role: string
    };
    constructor() {
        this.user = { 
            username: null, 
            password: null,
            email: null,
            firstname: null,
            lastname: null,
            role: null
        };
    }

    ngOnInit() {

    }

    createAccount() {
        let options = {
            username: this.user.username,
            password: this.user.password,
            profile: {
                firstname: this.user.firstname,
                lastname: this.user.lastname,
                roles: [ this.user.role ],
                emails: [  this.user.email ]
            },
        };

        Meteor.call('createNewUser', options);
    }
}