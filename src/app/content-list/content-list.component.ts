import { Component } from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {Product} from '../Shared/models/product';
import {ElectronicItemsService} from '../services/electronic-items.service';
import {ContentListItemComponent} from '../content-list-item/content-list-item.component';
import {Router} from '@angular/router';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable
} from '@angular/material/table';
import {MatDivider} from '@angular/material/list';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    NgForOf,
    NgForOf,
    NgClass,
    ContentListItemComponent,
    CurrencyPipe,
    TitleCasePipe,
    UpperCasePipe,
    HoverHighlightDirective,
    MatCardModule,
    MatButtonModule,
    MatDivider,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatTable
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
    this.router.navigate(['/modify-list-item', id]);
  }

  onDelete(id: number): void {
    this.ElectronicItemsService.deleteElectronics(id).subscribe(() => {
      this.productList = this.productList.filter(product => product.id !== id);
    });
  }
}

