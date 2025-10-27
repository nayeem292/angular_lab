import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // ✅ correct import

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
