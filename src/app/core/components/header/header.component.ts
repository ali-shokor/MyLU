import { Component, HostBinding, inject, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { sign } from 'crypto';
import { ThemeService } from '../../../shared/services/theme.service';
import { ChatbotService } from '../../../shared/services/chatbot.service';
import { ChatbotComponent } from "../chatbot/chatbot.component";

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() { }
  theme = inject(ThemeService);
  chatBot = inject(ChatbotService);

  darkOn = signal(true);
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleTheme() {
    this.darkOn.set(!this.darkOn());
    this.theme.darkIsOn.set(this.darkOn());
  }

  chatBotClicked() {
    this.chatBot.chatBotButtonPressed();
  }
}
