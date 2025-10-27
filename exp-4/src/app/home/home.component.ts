import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToDestinations() {
    this.router.navigate(['/destinations']);
  }

  goToBookings() {
    this.router.navigate(['/bookings']);
  }
}
