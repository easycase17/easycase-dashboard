import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../../imports/api/users';
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
        Meteor.loginWithFacebook(
            {},
            (err) => {
                if (err) {
                    console.log('Handle errors here: ', err);
                }
            });
    }
}