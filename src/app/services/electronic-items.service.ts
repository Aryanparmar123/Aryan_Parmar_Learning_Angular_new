import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ProductList} from '../data/mock-content';
import {Product} from '../Shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ElectronicItemsService {
private product:Product[]= ProductList;
  constructor() { }


  getAllElectronics(): Observable<Product[]> {
    return of(ProductList);
  }

}
