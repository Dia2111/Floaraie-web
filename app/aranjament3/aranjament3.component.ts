import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-aranjament3',
  templateUrl: './aranjament3.component.html',
  styleUrls: ['./aranjament3.component.css']
})
export class Aranjament3Component {
  productsFromDB: product[]=[];
  desiredProductId: number = 3;

  constructor(private productService:ProductServicesService){
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(result=>{this.productsFromDB=result})
  }
}