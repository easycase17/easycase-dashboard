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
    private username: string;
    private password: string;
    private email: string;
    constructor() {

    }

    ngOnInit() {

    }

    createAccount() {
        let options = {
            username: this.username,
            password: this.password,
            profile: {
                firstname: 'Guocheng',
                lastname: 'Wei'
            },
            isDefault: true,
            roles: ['lawyer']
        };

        Meteor.call('createNewUser', options);
    }
}