import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone: true
})
export class Profile {
  user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}

