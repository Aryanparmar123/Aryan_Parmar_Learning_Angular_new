import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import {ContentListComponent} from './app/content-list/content-list.component';


const routes = [
  { path: '', component: ContentListComponent },

  { path: '**', component: ContentListComponent }

];


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
