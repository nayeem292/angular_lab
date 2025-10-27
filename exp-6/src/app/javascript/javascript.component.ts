import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './javascript.component.html', // ✅ correct template
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {  // ✅ make sure the class name matches export
  title = "JavaScript";

  constructor(private enrollService: EnrollService) { }

  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
