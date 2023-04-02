import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-account-channel',
  templateUrl: './account-channel.component.html',
  styleUrls: ['./account-channel.component.scss']
})
export class AccountChannelComponent implements OnInit {


  @Input() leftButton!: string;
  @Input() rightButton!: string;

  videos: any;

  constructor() { }

  ngOnInit(): void {
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
        <span class="icon">
          <i class="fas fa-cog"></i>
        </span>
        Paramètres
      </a>
    `;
  }

}
