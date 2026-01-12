import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-college-student-section',
  imports: [CommonModule],
  templateUrl: './college-student-section.component.html',
  styleUrl: './college-student-section.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0, transform: 'translateY(20px)' }), animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))]),
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))])
    ])
  ]
})
export class CollegeStudentSectionComponent {
  features = [
    {
      id: 'courses',
      title: 'Quick & Easy to Use: Your Full Guide to LU',
      description: 'Access all course PDFs and summaries for every major. Find detailed information on each subject with accompanying videos.',
      imageSrc: '/illustration/courses-section.svg',
      buttonText: 'Try it out',
    },
    {
      id: 'grades',
      title: 'Grades Made Simple: Your Path to Academic Success',
      description: 'Calculate your grades with ease, access guides, and understand the grading system—all in one convenient location.',
      imageSrc: '/illustration/grades.svg',
      buttonText: 'Explore Now',
    }
  ];

  activeTab: string = this.features[0].id;

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
