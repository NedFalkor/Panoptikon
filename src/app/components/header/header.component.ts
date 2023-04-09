import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  leftButton: { label: string, icon: string } = { label: 'Left', icon: 'fa fa-chevron-left' };
  rightButton: { label: string, icon: string } = { label: 'Right', icon: 'fa fa-chevron-right' };

  constructor() { }

  ngOnInit(): void {
    this.leftButton.label = 'Home';
    this.leftButton.icon = 'fa fa-home';

    this.rightButton.label = 'Settings';
    this.rightButton.icon = 'fa fa-cog';
  }

}
