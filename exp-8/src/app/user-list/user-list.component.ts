import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CommonModule } from '@angular/common'; // needed for *ngFor

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];

  constructor(private fetchService: FetchDataService) { }

  ngOnInit(): void {
    this.fetchService.getUser().subscribe(users => this.userList = users);
  }
}
