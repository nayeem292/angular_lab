import { Component } from '@angular/core';
import { Student } from './student/student.component';
import { Faculty } from './faculty/faculty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Student, Faculty],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  protected title = 'EXP-2-Components';
}
