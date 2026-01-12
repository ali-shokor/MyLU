import { Component, inject, signal } from '@angular/core';
import { LoginService } from '../../../shared/services/login.service';

@Component({
  selector: 'app-login-signup',
  imports: [],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  login = inject(LoginService)
  
  
    constructor() { }
  
    loginClosedClicked() {
      this.login.loginClosePressed()
    }
  }