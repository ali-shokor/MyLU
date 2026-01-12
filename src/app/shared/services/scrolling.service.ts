import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToBottom = new Subject<void>();

  scrollToBottom$ = this.scrollToBottom.asObservable();

  triggerScroll() {
    this.scrollToBottom.next();
  }
}
