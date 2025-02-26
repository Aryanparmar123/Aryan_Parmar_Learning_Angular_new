import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ContentListItemComponent} from '../content-list-item/content-list-item.component';
import {Product} from '../Shared/models/product';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    ContentListItemComponent,
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  // placeholder values for table
  displayedColumns:string[]= ['id', 'name', 'price', 'category', 'color'];

  productList: Product[] = [
    {
      id: 1,
      name: "Desktop",
      price: 1000,
      category: "Android",
      color: false
    },
    {
      id: 2,
      name: "iphone 11",
      price: 1100,
      category: "iOS",
      color: false
    },
    {
      id: 3,
      name: "Airpods",
      category: "iOS",
      price: 130,
      color: true
    },
    {
      id: 4,
      name: "Monitor",
      price: 100,
      category: "Hardware",
      color: false
    },
    {
      id: 5,
      name: "Mouse",
      price: 10,
      category: "Hardware",
      color: true
    }
  ]
}
