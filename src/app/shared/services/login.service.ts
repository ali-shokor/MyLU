import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  openLogin = signal(false)
  constructor() { }

  loginPressed() {
    this.openLogin.set(true)
  }
  
  loginClosePressed() {
    this.openLogin.set(false)
  }
}
