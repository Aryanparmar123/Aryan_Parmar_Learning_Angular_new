import {Component, Input} from '@angular/core';
import {Product} from "../Shared/models/product";
import {CurrencyPipe, NgClass, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ProductLabelPipe} from '../pipes/product-label.pipe';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';
import {MatChip} from '@angular/material/chips';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/list';

@Component({
    selector: 'app-content-list-item',
  imports: [
    NgIf,
    NgClass,
    CurrencyPipe,
    UpperCasePipe,
    TitleCasePipe,
    ProductLabelPipe,
    HoverHighlightDirective,
    MatChip,
    MatDivider,
    MatCardContent,
    MatCardSubtitle,
    MatCard,
    MatCardHeader


  ],
    templateUrl: './content-list-item.component.html',
    standalone: true,
    styleUrl: './content-list-item.component.css'
})
// assignment 9 started
export class ContentListItemComponent {

    @Input() product?: Product;
}
