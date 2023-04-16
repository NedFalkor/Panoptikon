import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser: User = {
    username: '',
    email: '',
    password: ''
  };

  acceptedTerms: boolean;

  constructor(private userService: UserService) {
    this.acceptedTerms = false;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Username: ', this.newUser.username);
    console.log('Password: ', this.newUser.password);
    console.log('Email: ', this.newUser.email);
    console.log('Accepted terms: ', this.acceptedTerms);

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