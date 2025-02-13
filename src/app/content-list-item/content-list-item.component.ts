import {Component, Input} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-content-list-item',
  imports: [],
  templateUrl: './content-list-item.component.html',
  standalone: true,
  styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {
  @Input() product!: Product;
}
