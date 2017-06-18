import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import template from './admin.template.html';
import style from './admin.style.scss';

@Component({
    selector: 'admin',
    template,
    // styles: [ style ],
    encapsulation: ViewEncapsulation.None
})
export class Admin {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }
}