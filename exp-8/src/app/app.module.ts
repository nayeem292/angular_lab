import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  // remove declarations completely
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,       // import standalone component
    UserListComponent   // import standalone component
  ],
  providers: [],
  bootstrap: [AppComponent]   // bootstrap AppComponent
})
export class AppModule { }
