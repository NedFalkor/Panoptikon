import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

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

    const usernamePattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!usernamePattern.test(this.newUser.username || '')) {
      console.error('Username must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*#?&)');
      return;
    }

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(this.newUser.password || '')) {
      console.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*#?&)');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.newUser.email || '')) {
      console.error('Invalid email address');
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