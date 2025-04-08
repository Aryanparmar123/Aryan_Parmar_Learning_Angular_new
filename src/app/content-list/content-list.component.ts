import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {Product} from '../Shared/models/product';
import {ElectronicItemsService} from '../services/electronic-items.service';
import {ContentListItemComponent} from '../content-list-item/content-list-item.component';
import {Router} from '@angular/router';

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

  constructor(private ElectronicItemsService: ElectronicItemsService,private router: Router) { }

  ngOnInit(): void {
    this.ElectronicItemsService.getAllElectronics().subscribe(data => {
      this.productList = data;
    });
  }
  onEdit(id: number): void {
    this.router.navigate(['/modify-product', id]);
  }

  onDelete(id: number): void {
    this.ElectronicItemsService.deleteElectronics(id).subscribe(() => {
      this.productList = this.productList.filter(product => product.id !== id);
    });
  }
}

