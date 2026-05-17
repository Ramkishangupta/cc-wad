# Angular Auth App (ass3)

## Commands

```bash
ng new ass3
cd ass3
ng generate component register
ng generate component login
ng generate component profile
```

---

## open src/app/app.routes.ts and add the following code:

```ts
import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile }
];
```

---

## open src/app/app.html and replace the content with the following code:

```html
<router-outlet></router-outlet>
```

---

## open src/app/app.ts and replace the content with the following code:
- in @Component add : `standalone: true`
- remove `protected readonly title = signal('ass3');`

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {}
```

---

## open src/app/register/register.ts:
- in @Component add : `standalone: true`
- import `FormsModule` from `@angular/forms`
- import `Router` and `RouterLink` from `@angular/router`
- add `FormsModule`, `RouterLink` to imports array in @Component

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html'
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
    let existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    console.log('User registered:', newUser);
    this.router.navigate(['/login']);
  }
}
```

---

## open src/app/register/register.html and write the following code:

```html
<h2>Register</h2>

<input [(ngModel)]="user.name" placeholder="Name"><br><br>
<input [(ngModel)]="user.email" placeholder="Email"><br><br>
<input [(ngModel)]="user.password" type="password" placeholder="Password"><br><br>

<button (click)="register()">Register</button>

<br><br>
<a routerLink="/login">Login</a>
```

---

## open src/app/login/login.ts:
- in @Component add : `standalone: true`
- import `FormsModule` from `@angular/forms`
- import `Router` and `RouterLink` from `@angular/router`
- add `FormsModule`, `RouterLink` to imports array in @Component

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html'
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
```

---

## open src/app/login/login.html and write the following code:

```html
<h2>Login</h2>

<input [(ngModel)]="email" placeholder="Email"><br><br>
<input [(ngModel)]="password" type="password" placeholder="Password"><br><br>

<button (click)="login()">Login</button>

<br><br>
<a routerLink="/register">Register</a>
```

---

## open src/app/profile/profile.ts:
- in @Component add : `standalone: true`
- import `Router` from `@angular/router`

```ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html'
})
export class Profile {
  user = JSON.parse(localStorage.getItem('currentUser') || '{}');

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
```

---

## open src/app/profile/profile.html and write the following code:

```html
<h2>Profile</h2>

<p>Name: {{ user.name }}</p>
<p>Email: {{ user.email }}</p>

<button (click)="logout()">Logout</button>
```

---

## Run the application using the command:

```bash
ng serve
```

Open `http://localhost:4200`