import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onBack(): void {
    this.router.navigate(['/']);
  }

  onSignIn(): void {
    // TODO: Implement sign in logic
    console.log('Sign in clicked');
  }

  onSignUp(): void {
    // TODO: Implement sign up navigation
    console.log('Sign up clicked');
  }

  onForgotPassword(): void {
    // TODO: Implement forgot password logic
    console.log('Forgot password clicked');
  }
}
