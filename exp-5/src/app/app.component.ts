import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyComponent } from './faculty/faculty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FacultyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EXP-5-List';
}
