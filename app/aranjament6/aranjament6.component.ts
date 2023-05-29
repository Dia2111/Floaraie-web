import { Component } from '@angular/core';
// import { product2 } from '../models/product2';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament6',
  templateUrl: './aranjament6.component.html',
  styleUrls: ['./aranjament6.component.css']
})
export class Aranjament6Component {
  product2: any;
  desiredProductId: number = 6;

  constructor(private productService:ProductServicesService){
    this.getProduct2();
  }

  getProduct2() {
    this.productService.getProduct2().subscribe(result => {
      this.product2 = result;
    });
  }
}