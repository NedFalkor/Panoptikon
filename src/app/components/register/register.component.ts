import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

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

  constructor() {
    this.acceptedTerms = false;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Username: ', this.newUser.username);
    console.log('Password: ', this.newUser.password);
    console.log('Email: ', this.newUser.email);
    console.log('Accepted terms: ', this.acceptedTerms);
  }

}

