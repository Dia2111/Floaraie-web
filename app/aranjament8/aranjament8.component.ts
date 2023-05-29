import { Component } from '@angular/core';
// import { product3 } from '../models/product3';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament8',
  templateUrl: './aranjament8.component.html',
  styleUrls: ['./aranjament8.component.css']
})
export class Aranjament8Component {
  product3: any;
  desiredProductId: number = 8;

  constructor(private productService:ProductServicesService){
    this.getProduct3();
  }

  getProduct3() {
    this.productService.getProduct3().subscribe(result => {
      this.product3 = result;
    });
  }
}