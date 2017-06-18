import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import template from './navbar.template.html';
import style from './navbar.style.scss';

@Component({
    selector: 'navbar',
    template,
    styles: [ style ],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }
}