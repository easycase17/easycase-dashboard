import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(): boolean {
        if (Meteor.userId()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}