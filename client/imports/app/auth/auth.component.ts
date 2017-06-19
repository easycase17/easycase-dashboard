import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import template from './auth.template.html';
import style from './auth.style.scss';

@Component({
    selector: 'Auth',
    template,
    // styles: [ style ],
    // styles: [ style ],
    encapsulation: ViewEncapsulation.None
})
export class Auth {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    loginWithFacebook() {
        new Promise(() => {
            Meteor.loginWithFacebook({
                requestPermissions: [
                    'public_profile',
                    'email',
                    'user_friends',
                    'user_photos',
                    'user_education_history'
                ]},
                (err, user) => {
                    if (err) {
                        console.log('Handle errors here: ', err);
                    }
                    console.log(user);
                }
            );

        });
    }
}