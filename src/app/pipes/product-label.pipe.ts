import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'productLabel'
})
export class ProductLabelPipe implements PipeTransform {

  transform(product: any): string {
    if (!product || !product.name || !product.category) return '';
    return ` ${product.name} - ${product.category}`;
  }

}
