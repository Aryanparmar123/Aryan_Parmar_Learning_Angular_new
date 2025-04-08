import {Component, OnInit} from '@angular/core';
import {ContentListComponent} from './content-list/content-list.component';
import {ContentListItemComponent} from './content-list-item/content-list-item.component';
import {ElectronicItemsService} from './services/electronic-items.service';
import {Product} from './Shared/models/product';

@Component({
  selector: 'app-root',
  imports: [ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  product?: Product;

  title = 'Launched Products';


  constructor(private electronicItemsService: ElectronicItemsService) { }

  ngOnInit(): void {
    this.getItemById(5);
  }

  getItemById(id: number): void {
    this.electronicItemsService.getElectronicsById(id).subscribe(item => {
      this.product = item;
    });
  }
}
