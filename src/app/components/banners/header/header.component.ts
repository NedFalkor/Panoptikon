import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  leftButton: string;
  rightButton: string;

  constructor() {
    this.leftButton = `
      <a class="button is-outlined is-white is-focused is-hovered has-text-black my-1 mx-2 p-1" routerLink="/menu">
        <span class="icon">
          <i class="fas fa-bars"></i>
          leftbutton
        </span>
      </a>
    `;
    this.rightButton = `
      <a class="button is-outlined is-link is-focused is-hovered has-text-white my-1 mx-2 p-1" routerLink="/settings">
      <span class="icon">
      <i class="fas fa-bars"></i>
      rightbutton
      </span>
      </a>
    `;
  }

  ngOnInit(): void {
  }

}
