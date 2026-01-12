import { coerceStringArray } from '@angular/cdk/coercion';
import { Injectable, signal } from '@angular/core';
import { sign } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkIsOn = signal(true)
  constructor() {
    
  }
  changed() {
    console.log(this.darkIsOn())
  }
}
