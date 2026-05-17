import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink , Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule , RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true
})
export class Register {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  register() {
    const newUser = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password
    };
    let existingUser = JSON.parse(localStorage.getItem('users') || '[]');
    existingUser.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUser));
    //console.log('User registered:', newUser);
    this.router.navigate(['/login']);
  }

}
