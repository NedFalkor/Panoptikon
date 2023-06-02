import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.username = 'John Doe';
    this.email = 'johndoe@example.com';
  }

  onSubmit() {
    const updatedUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.userService.updateUser(updatedUser).subscribe(
      (user: User) => {
        /* if (this.profilePictureUrl !== user.profilePictureUrl) {
          this.profilePictureUrl = user.profilePictureUrl;
        } */
        alert('Profile information updated successfully!');
      },
      (error) => {
        alert('An error occurred while updating the profile information.');
      }
    );
  }

  onUsernameChange() {
    const updatedUser = { username: this.username };
    this.userService.updateUser(updatedUser).subscribe(
      (user: User) => {
        alert('Username updated successfully!');
      },
      (error) => {
        alert('An error occurred while updating the username.');
      }
    );
  }

  onEmailChange() {
    const updatedUser = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.userService.updateUser(updatedUser).subscribe(
      (user: User) => {
        alert('Email updated successfully!');
      },
      (error) => {
        alert('An error occurred while updating the email.');
      }
    );
  }

  onPasswordChange() {
    const updatedUser = { password: this.password };
    this.userService.updateUser(updatedUser).subscribe(
      (user: User) => {
        alert('Password updated successfully!');
      },
      (error) => {
        alert('An error occurred while updating the password.');
      }
    );
  }

  navigateToCaptureImage() {
    this.router.navigate(['/capture-image']);
  }

}