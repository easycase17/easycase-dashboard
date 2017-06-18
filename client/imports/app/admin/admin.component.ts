import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../../../imports/api/users';
import template from './admin.template.html';
import style from './admin.style.scss';

@Component({
    selector: 'admin',
    template,
    // styles: [ style ],
    // styles: [ style ],
    encapsulation: ViewEncapsulation.None
})
export class Admin {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    loginWithFacebook() {
        Meteor.loginWithFacebook(
            {
                requestPermissions: ['public_profile', 'email']
            }, 
            function(err) {
                if (err) {
                    console.log('Handle errors here: ', err);
                }
            });
    }
}