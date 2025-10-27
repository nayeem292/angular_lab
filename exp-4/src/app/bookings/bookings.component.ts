import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  name = '';
  persons: number | null = null;
  destination = '';
  bookingConfirmed = false;

  submitBooking() {
    if (this.name && this.persons && this.destination) {
      this.bookingConfirmed = true;
    }
  }
}
