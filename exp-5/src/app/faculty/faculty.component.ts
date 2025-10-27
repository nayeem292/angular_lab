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
export class FacultyComponent {
  selectedDept = '';
  selectedGender = '';

  facultyList = [
    {
      name: 'Dr. N. Kasiviswanath',
      dept: 'CSE',
      email: 'hod.cse@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/faculty/hod.png'
    },
    {
      name: 'Smt. D.L.N. Prasunna',
      dept: 'CSE',
      email: 'prasunna.cse@gprec.ac.in',
      gender: 'Female',
      photo: 'assets/faculty/DLN.png'
    },
    {
      name: 'Smt. T. Chandana',
      dept: 'ECS',
      email: 'chandana.ecs@gprec.ac.in',
      gender: 'Female',
      photo: 'assets/faculty/chandana.png'
    },
    {
      name: 'Dr. R. Praveen Sam',
      dept: 'ECS',
      email: 'hod.ecs@gprec.ac.in',
      gender: 'Male',
      photo: 'assets/faculty/praveen.png'
    },
    {
      name: 'Smt. Srilakshmi',
      dept: 'CSE',
      email: 'srilakshmi.cse@gprec.ac.in',
      gender: 'Female',
      photo: 'assets/faculty/srilakshmi.png'
    }
  ];

  get filteredFaculty() {
    return this.facultyList.filter(f =>
      (this.selectedDept ? f.dept === this.selectedDept : true) &&
      (this.selectedGender ? f.gender === this.selectedGender : true)
    );
  }
}
