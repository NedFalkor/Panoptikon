import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  username!: string;
  email!: string;
  password!: string;
  profilePictureUrl: string = 'https://example.com/profile-picture.jpg';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = 'John Doe';
    this.email = 'johndoe@example.com';
  }

  onSubmit() {
  }

  navigateToCaptureImage() {
    this.router.navigate(['/capture-image']);
  }
}
