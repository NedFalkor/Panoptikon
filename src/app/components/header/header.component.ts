import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

leftButton = { label: '', icon: '', color: '', route: '/' };
rightButton = { label: '', icon: '', color: '', route: '/' };

constructor() { }

ngOnInit(): void {
this.leftButton = { label: '', icon: '', color: '', route: '/' };
this.rightButton = { label: '', icon: '', color: '', route: '/' };
}

}