import { Component } from '@angular/core';
import {ContentListComponent} from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  imports: [ContentListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Launched Products';
}
