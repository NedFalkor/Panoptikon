import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  title = 'UserSearch';
  searchText = '';
  users: User[] = [];
  matchingUsers: User[] = [];

  searchUsers() {
    const matchingUsers = this.users.filter((user: User) => 
      user.username && user.username.toLowerCase().includes(this.searchText.toLowerCase())
    );
  
    const searchResults = document.querySelector('.search-results');
    if (searchResults) {
      searchResults.innerHTML = '';
      matchingUsers.forEach((user: User) => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
  
        const profilePicture = document.createElement('div');
        profilePicture.classList.add('profile-picture');
        if (user.profilePicture) {
          profilePicture.style.backgroundImage = `url(${user.profilePicture})`;
        }
  
        const username = document.createElement('div');
        username.classList.add('username');
        username.innerHTML = user.username || '';
  
        userElement.appendChild(profilePicture);
        userElement.appendChild(username);
        searchResults.appendChild(userElement);
      });
    }
  }
}