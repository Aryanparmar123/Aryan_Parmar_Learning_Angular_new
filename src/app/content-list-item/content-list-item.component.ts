import {Component, Input} from '@angular/core';
import {Product} from "../Shared/models/product";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-content-list-item',
    imports: [
        NgIf
    ],
    templateUrl: './content-list-item.component.html',
    standalone: true,
    styleUrl: './content-list-item.component.css'
})
export class ContentListItemComponent {

    @Input() product?: Product;
}
