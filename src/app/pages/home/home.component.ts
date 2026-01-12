import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { BannerComponent } from "../../core/components/banner/banner.component";
import { animate, style, transition, trigger } from '@angular/animations';
import { UniDetailsSectionComponent } from "../../core/components/uni-details-section/uni-details-section.component";
import { ChatbotService } from '../../shared/services/chatbot.service';
import { ChatbotComponent } from "../../core/components/chatbot/chatbot.component";
import { CollegeStudentSectionComponent } from "../../core/components/college-student-section/college-student-section.component";
import { FooterComponent } from "../../core/components/footer/footer.component";
import { EventsComponent } from "../../core/components/events/events.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BannerComponent, UniDetailsSectionComponent, ChatbotComponent, CollegeStudentSectionComponent, FooterComponent, EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.7s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  chatBot = inject(ChatbotService);

  chatBotClicked() {
    this.chatBot.chatBotButtonPressed();
  }
}
