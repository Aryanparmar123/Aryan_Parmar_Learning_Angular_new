import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import {ContentListComponent} from './app/content-list/content-list.component';
import {ModifyListItemComponent} from './app/modify-list-item/modify-list-item.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';


const routes = [
  { path: '', component: ContentListComponent },
  {
    path: 'modify-list-item',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component')
        .then(m => m.ModifyListItemComponent)
  },
  {
    path: 'modify-list-item/:id',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component')
        .then(m => m.ModifyListItemComponent)
  },


  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component')
        .then(m => m.PageNotFoundComponent)
  }
];


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
