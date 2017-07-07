import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.template.html',
})
export class HomeComponent implements OnInit{
    constructor() {}

    ngOnInit() {}
}