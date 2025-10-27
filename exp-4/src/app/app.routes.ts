import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { BookingsComponent } from './bookings/bookings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'bookings', component: BookingsComponent },
];
