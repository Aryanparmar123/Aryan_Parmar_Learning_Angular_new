import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import {CommonModule} from '@angular/common';
import {ContentListComponent} from './content-list/content-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ContentListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: "Laptop", price: 120, category: "Electronics", color: "Black" },
    { id: 2, name: "Phone", price: 8900, category: "Electronics", color: "Black" },
    { id: 3, name: "Chair", price: 1250, category: "Furniture", color: "White" }
  ];
}
