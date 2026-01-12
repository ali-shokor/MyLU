import { Component, HostBinding, inject, signal } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { LoginService } from '../../../shared/services/login.service';
import { ChatbotComponent } from "../chatbot/chatbot.component";
import { ChatbotService } from '../../../shared/services/chatbot.service';
import { ScrollService } from '../../../shared/services/scrolling.service';

@Component({
  selector: 'app-banner',
  imports: [LoginSignupComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  theme = inject(ThemeService)
  darkOn = signal(this.theme.darkIsOn())
  login = inject(LoginService)
  chatBot = inject(ChatbotService);


  constructor(private scrollService: ScrollService) {}

  scrollToLastSection() {
    this.scrollService.triggerScroll();
  }

  loginClicked() {
    this.login.loginPressed()
  }

}
