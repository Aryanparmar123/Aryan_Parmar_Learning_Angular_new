import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'], // Fix styleUrls typo
})
export class ContentListComponent {
  products: Product[] = [
    { id: 1, name: "Laptop", price: 120, category: "Electronics", color: "Black" },
    { id: 2, name: "Phone", price: 8900, category: "Electronics", color: "Black" },
    { id: 3, name: "Chair", price: 1250, category: "Furniture", color: "White" }
  ];
}
