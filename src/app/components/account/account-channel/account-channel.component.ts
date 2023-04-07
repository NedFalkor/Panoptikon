import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-account-channel',
  templateUrl: './account-channel.component.html',
  styleUrls: ['./account-channel.component.scss']
})
export class AccountChannelComponent implements OnInit {

  @ViewChild('header') headerComponent!: HeaderComponent;
  @ViewChild('footer') footerComponent!: FooterComponent;

  videos: any;

  constructor() { }

  ngOnInit(): void {

    this.footerComponent.leftButtonDown = '<button>Ajouter une video</button>';
    this.footerComponent.rightButtonDown = '<button>Déconnecter</button>';
    
    this.headerComponent.leftButton = '<button>Retour</button>';
    this.headerComponent.rightButton = '<button>Paramètres</button>';
  }

}
