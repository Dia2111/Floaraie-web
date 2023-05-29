import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament1',
  templateUrl: './aranjament1.component.html',
  styleUrls: ['./aranjament1.component.css']
})
export class Aranjament1Component {
  productsFromDB: product[]=[];
  desiredProductId: number = 1;

  constructor(private productService:ProductServicesService){
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(result=>{this.productsFromDB=result})
  }
}