import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {Product} from '../Shared/models/product';
import {ElectronicItemsService} from '../services/electronic-items.service';
import {ContentListItemComponent} from '../content-list-item/content-list-item.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    NgForOf,
    NgClass,
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  // placeholder values for table
  displayedColumns: string[] = ['id', 'name', 'price', 'category', 'color'];

  productList: Product[] = [];

  constructor(private ElectronicItemsService: ElectronicItemsService) { }

  ngOnInit(): void {
    this.ElectronicItemsService.getAllElectronics().subscribe(data => {
      this.productList = data;
    });
  }
}
