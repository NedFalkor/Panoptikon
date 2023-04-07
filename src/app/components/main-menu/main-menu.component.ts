import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

  @ViewChild('header') headerComponent!: HeaderComponent;
  @ViewChild('footer') footerComponent!: FooterComponent;

  videos: any;

  constructor() { }

  ngOnInit() {

    this.footerComponent.leftButtonDown = '<button>Ajouter une video</button>';
    this.footerComponent.rightButtonDown = '<button>Déconnecter</button>';
    
    this.headerComponent.leftButton = '<button>Ajouter une video</button>';
    this.headerComponent.rightButton = '<button>Paramètres</button>';
  }

}