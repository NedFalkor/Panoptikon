import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  public passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  newUser: User = {
    username: '',
    email: '',
    password: ''
  };

  acceptedTerms = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Username: ', this.newUser.username);
    console.log('Password: ', this.newUser.password);
    console.log('Email: ', this.newUser.email);
    console.log('Accepted terms: ', this.acceptedTerms);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.newUser.email || '')) {
      console.error('Invalid email address');
      return;
    }

    if (!this.newUser.username || this.newUser.username.length < 10) {
      console.error('Username must be at least 10 characters long');
      return;
    }

    const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(this.newUser.password || '')) {
      console.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)');
      return;
    }

    this.userService.createUser(this.newUser)
      .subscribe(
        (user) => {
          console.log('User created:', user);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
  }
}