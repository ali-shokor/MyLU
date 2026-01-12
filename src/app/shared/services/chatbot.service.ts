import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }
  chatBotButton = signal(false)

  chatBotButtonPressed() {
    this.chatBotButton.set(true)
  }
  chatBotButtonClosePressed() {
    this.chatBotButton.set(false)
  }
}
