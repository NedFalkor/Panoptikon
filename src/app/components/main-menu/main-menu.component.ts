import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {
  @ViewChild('header') headerComponent!: HeaderComponent;

  videos: any;

  constructor() { }

  ngOnInit() {
    
    this.headerComponent.leftButton = '<button>Ajouter une video</button>';
    this.headerComponent.rightButton = '<button>Paramètres</button>';
  }

}