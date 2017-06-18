import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import template from './layout.template.html';

@Component({
    selector: 'layout',
    // styleUrls: ['./error.style.scss'],
    // templateUrl: './error.template.html',
    template,
    encapsulation: ViewEncapsulation.None
})
export class Layout {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }
}