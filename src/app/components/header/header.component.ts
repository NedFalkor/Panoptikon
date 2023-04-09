import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  leftButton: string;
  rightButton: string;

<<<<<<< HEAD
leftButton = { label: '', icon: '', color: '', route: '/' };
rightButton = { label: '', icon: '', color: '', route: '/' };
=======
  constructor() {
    this.leftButton = `
      <a class="button is-outlined is-white is-focused is-hovered has-text-black my-1 mx-2 p-1" routerLink="/menu">
        <span class="icon">
          <i class="fas fa-bars"></i>
          Menu
        </span>
      </a>
    `;
    this.rightButton = `
      <a class="button is-outlined is-link is-focused is-hovered has-text-white my-1 mx-2 p-1" routerLink="/settings">
      <span class="icon">
      <i class="fas fa-bars"></i>
      Paramètres
      </span>
      </a>
    `;
  }
>>>>>>> e86e473ff78ca1e8ec814c4187dcc81691137cc8

constructor() { }

<<<<<<< HEAD
ngOnInit(): void {
this.leftButton = { label: '', icon: '', color: '', route: '/' };
this.rightButton = { label: '', icon: '', color: '', route: '/' };
}

=======
>>>>>>> e86e473ff78ca1e8ec814c4187dcc81691137cc8
}