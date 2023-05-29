import { Component } from '@angular/core';
// import { product2 } from '../models/product2';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament5',
  templateUrl: './aranjament5.component.html',
  styleUrls: ['./aranjament5.component.css']
})
export class Aranjament5Component {
  product2: any;
  desiredProductId: number = 5;

  constructor(private productService:ProductServicesService){
    this.getProduct2();
  }

  getProduct2() {
    this.productService.getProduct2().subscribe(result => {
      this.product2 = result;
    });
  }
}