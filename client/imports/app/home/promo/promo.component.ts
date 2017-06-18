import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import  template  from './promo.template.html';

@Component({
    selector: 'promo',
    template,
    encapsulation: ViewEncapsulation.None
})
export class PromoComponent {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }
}