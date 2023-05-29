import { Component } from '@angular/core';
import { ProductServicesService } from '../Services/product-services.service';
// import { product2 } from '../models/product2';

@Component({
  selector: 'app-aranjament4',
  templateUrl: './aranjament4.component.html',
  styleUrls: ['./aranjament4.component.css']
})
export class Aranjament4Component {
  product2: any;
  desiredProductId: number = 4;

  constructor(private productService:ProductServicesService){
    this.getProduct2();
  }
  getProduct2(){
    this.productService.getProduct2().subscribe(result=>{this.product2=result})
  }
}