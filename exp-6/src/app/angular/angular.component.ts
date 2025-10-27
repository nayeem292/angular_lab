import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title = "Angular";

  constructor(private enrollService: EnrollService) {}

  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
