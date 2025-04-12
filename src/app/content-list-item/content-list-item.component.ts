import {Component, Input} from '@angular/core';
import {Product} from "../Shared/models/product";
import {CurrencyPipe, NgClass, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ProductLabelPipe} from '../pipes/product-label.pipe';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';

@Component({
    selector: 'app-content-list-item',
  imports: [
    NgIf,
    NgClass,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    ProductLabelPipe,
    HoverHighlightDirective

  ],
    templateUrl: './content-list-item.component.html',
    standalone: true,
    styleUrl: './content-list-item.component.css'
})
// assignment 9 started
export class ContentListItemComponent {

    @Input() product?: Product;
}
