import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  leftButton: string;
  rightButton: string;

  constructor() {
    this.leftButton = `
      <a class="button is-outlined is-white is-focused is-hovered has-text-black my-1 mx-2 p-1" routerLink="/menu">
        <span class="icon">
          <i class="fas fa-bars"></i>
        </span>
        Menu
      </a>
    `;
    this.rightButton = `
      <a class="button is-outlined is-link is-focused is-hovered has-text-white my-1 mx-2 p-1" routerLink="/settings">
        Paramètres
      </a>
    `;
  }

  ngOnInit(): void {
  }

}
