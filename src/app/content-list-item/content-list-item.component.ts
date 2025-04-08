import {Component, Input} from '@angular/core';
import {Product} from "../Shared/models/product";
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'app-content-list-item',
  imports: [
    NgIf,
    NgClass
  ],
    templateUrl: './content-list-item.component.html',
    standalone: true,
    styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {

    @Input() product?: Product;
}
