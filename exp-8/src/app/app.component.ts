import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,        // <--- add this
  imports: [UserListComponent],  // import child standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Experiment 8 HTTP Demo';
}
