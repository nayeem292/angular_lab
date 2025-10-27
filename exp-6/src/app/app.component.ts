import { Component } from '@angular/core';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularComponent, JavascriptComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
