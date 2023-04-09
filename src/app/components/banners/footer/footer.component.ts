import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

leftButton = { label: '', icon: '', color: '', route: '/' };
rightButton = { label: '', icon: '', color: '', route: '/' };

constructor() { }

ngOnInit(): void {
  
this.leftButton = { label: '', icon: '', color: '', route: '/' };
this.rightButton = { label: '', icon: '', color: '', route: '/' };
}

}