import { Component, HostBinding, inject, OnChanges, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduShpere';
  theme = inject(ThemeService)
  darkOn = signal(this.theme.darkIsOn())

  // @HostBinding('class.dark') get mode() { //switch in the main ts
  //   return this.darkOn();
  // }
  get isDarkTheme() {
    return this.theme.darkIsOn()
  }
 
}
