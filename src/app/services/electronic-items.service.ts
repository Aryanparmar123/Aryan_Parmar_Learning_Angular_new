import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ProductList} from '../data/mock-content';
import {Product} from '../Shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ElectronicItemsService {
private products:Product[]= ProductList;
  constructor() { }


  getAllElectronics(): Observable<Product[]> {
    return of(ProductList);
  }


  getElectronicsById(id: number): Observable<Product | undefined> {
    const product = this.products.find(item => item.id === id);
    return of(product);
  }

  addElectronics(newProduct: Product): Observable<Product[]> {
    this.products.push(newProduct);
    return of(this.products);
  }

  updateElectronics(updatedProduct: Product): Observable<Product[]> {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
    return of(this.products);
  }

  deleteElectronics(productId: number): Observable<Product | undefined> {
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1)[0];
      return of(removedProduct);
    }
    return of(undefined);
  }
}





