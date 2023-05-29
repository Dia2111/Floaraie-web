import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament2',
  templateUrl: './aranjament2.component.html',
  styleUrls: ['./aranjament2.component.css']
})
export class Aranjament2Component {
  productsFromDB: product[]=[];
  desiredProductId: number = 2;

  constructor(private productService:ProductServicesService){
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(result=>{this.productsFromDB=result})
  }
}