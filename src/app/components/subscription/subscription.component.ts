import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  user: User = {
    username: '',
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      user => {
        console.log(user);
      },
      error => {
        console.error(error);
        this.errorMessage = 'An error occurred while subscribing. Please try again later.';
      }
    );
  }
}