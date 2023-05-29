import { Component } from '@angular/core';
// import { product3 } from '../models/product3';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament9',
  templateUrl: './aranjament9.component.html',
  styleUrls: ['./aranjament9.component.css']
})
export class Aranjament9Component {
  product3: any;
  desiredProductId: number = 9;

  constructor(private productService:ProductServicesService){
    this.getProduct3();
  }

  getProduct3() {
    this.productService.getProduct3().subscribe(result => {
      this.product3 = result;
    });
  }
}