import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recruiter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent {
  submitted = false;

  // Form fields
  fullName = '';
  position = '';
  experience = '';
  department = '';
  location = '';
  contact = '';

  registerRecruiter() {
    this.submitted = true;
  }
}
