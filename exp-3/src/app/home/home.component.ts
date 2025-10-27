import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() goToApplicant = new EventEmitter<void>();
  @Output() goToRecruiter = new EventEmitter<void>();
}
