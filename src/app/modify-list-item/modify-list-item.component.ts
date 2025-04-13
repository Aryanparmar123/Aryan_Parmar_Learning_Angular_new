import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Product} from '../Shared/models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ElectronicItemsService} from '../services/electronic-items.service';
import {HighlightOnFocusDirective} from '../directives/highlight-on-focus.directive';
import {MatCard, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/list';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-modify-list-item',
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    MatCard,
    MatCardTitle,
    MatDivider,
    MatFormField,
    MatCheckbox,
    MatInput,
    MatButton
  ],
  templateUrl: './modify-list-item.component.html',
  standalone: true,
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  productForm: FormGroup;
  product: Product | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private electronicItemsService: ElectronicItemsService,
    private router: Router
  ) {
    // Reactive form with validation
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      color: [false],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.electronicItemsService.getElectronicsById(+id).subscribe((product) => {
        if (product) {
          this.product = product;
          this.productForm.patchValue(product);
        }
      });
    }
  }

  onSubmit(): void {
    const product: Product = this.productForm.value;

    if (product.id) {

      this.electronicItemsService.updateElectronics(product).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {

      this.electronicItemsService.addElectronics(product).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }



  navigateToProductList(): void {
    this.router.navigate(['/']);
  }
}
