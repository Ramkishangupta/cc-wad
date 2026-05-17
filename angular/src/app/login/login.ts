import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})

export class Login {
  email = '';
  password = '';
  
  constructor(private router: Router) {}

  login() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    let found = users.find(
      (u: any) => u.email === this.email && u.password === this.password
    );
    if (found) {
      localStorage.setItem('currentUser', JSON.stringify(found));
      console.log('Login successful:', found);
      this.router.navigate(['/profile']);
    } else {
      console.log('Login failed: Invalid email or password');
    }
  }
}
