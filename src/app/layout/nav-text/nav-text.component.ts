import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-text',
  templateUrl: './nav-text.component.html',
  styleUrls: ['./nav-text.component.scss'],
})
export class NavTextComponent implements OnInit {
  @Input() text: any;
  constructor() {}

  ngOnInit(): void {}
  startedNow() {
    window.open('https://d1z21cxdx88qdj.cloudfront.net/#/');
  }
}
