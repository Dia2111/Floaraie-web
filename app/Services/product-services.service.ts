import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { product } from '../models/product';
import { product2 } from '../models/product2';
import { product3 } from '../models/product3';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private fs:Firestore) { }
  getProduct(): Observable <product[]>{
    const myProducts:any=collection(this.fs,'product');
    return collectionData(myProducts);
  } 
  getProduct2(): Observable <product2[]>{
    const myProducts:any=collection(this.fs,'product2');
    return collectionData(myProducts);
  } 
  getProduct3(): Observable <product3[]>{
    const myProducts:any=collection(this.fs,'product3');
    return collectionData(myProducts);
  } 
}
