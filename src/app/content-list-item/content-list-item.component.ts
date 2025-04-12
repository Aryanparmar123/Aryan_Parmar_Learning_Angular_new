import {Component, Input} from '@angular/core';
import {Product} from "../Shared/models/product";
import {CurrencyPipe, NgClass, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
    selector: 'app-content-list-item',
  imports: [
    NgIf,
    NgClass,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe
  ],
    templateUrl: './content-list-item.component.html',
    standalone: true,
    styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {

    @Input() product?: Product;
}
