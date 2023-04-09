import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  username!: string;
  email!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
    this.username = 'John Doe';
    this.email = 'johndoe@example.com';
  }

  onSubmit() {
  }
}
