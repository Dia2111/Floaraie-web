import { Component } from '@angular/core';
// import { product3 } from '../models/product3';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament7',
  templateUrl: './aranjament7.component.html',
  styleUrls: ['./aranjament7.component.css']
})
export class Aranjament7Component {
  product3: any;
  desiredProductId: number = 7;

  constructor(private productService:ProductServicesService){
    this.getProduct3();
  }

  getProduct3() {
    this.productService.getProduct3().subscribe(result => {
      this.product3 = result;
    });
  }
}