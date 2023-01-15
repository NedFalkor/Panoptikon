import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input()
  selected: string = ''; 
  
  @Output()
  onClose = new EventEmitter();

  showModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  cancel() { this.onClose.emit(null); }
  showSearch() { this.onClose.emit(this.selected) }

  showSearchBar() {
    this.showModal = true;

  }
}