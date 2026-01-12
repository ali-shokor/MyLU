import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-uni-details-section',
  imports: [CommonModule],
  templateUrl: './uni-details-section.component.html',
  styleUrl: './uni-details-section.component.css'
})
export class UniDetailsSectionComponent {
  
  isVisible = false;
  // ngAfterViewInit(): void {
  //   const section = document.querySelector('.main');
  //   if (section) {
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           this.isVisible = true;
  //           observer.disconnect(); // Trigger only once
  //         }
  //       },
  //       { threshold: 0.1 } // Adjust threshold as needed
  //     );
  
  //     observer.observe(section);
  //   }
  // }
}
