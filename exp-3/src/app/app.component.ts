import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { RecruiterComponent } from './recruiter/recruiter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, ApplicantComponent, RecruiterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: string = 'home';

  showApplicant() {
    this.currentView = 'applicant';
  }

  showRecruiter() {
    this.currentView = 'recruiter';
  }

  showHome() {
    this.currentView = 'home';
  }
}
