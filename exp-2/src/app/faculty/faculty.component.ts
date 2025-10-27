import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class Faculty {
  registerFaculty() {
    alert('Faculty registration submitted!');
  }
}
