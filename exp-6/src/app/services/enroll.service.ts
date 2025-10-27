import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  OnEnrollClicked(courseName: string) {
    alert(`You have enrolled in ${courseName}`);
  }
}
