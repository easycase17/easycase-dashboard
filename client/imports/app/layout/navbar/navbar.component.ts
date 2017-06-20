import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteorObservable } from 'meteor-rxjs';
import template from './navbar.template.html';
import style from './navbar.style.scss';

@Component({
    selector: 'navbar',
    template,
    styles: [ style ],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit{
    router: Router;
    private user: any;

    constructor(router: Router) {
        this.router = router;
        this.user = Meteor.users;
    }

    ngOnInit() {
        console.log(this.user);
    }

    ngOnDestroy() {
    }
}