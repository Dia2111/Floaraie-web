import { Component } from '@angular/core';
import { product } from '../models/product';
import { product2 } from '../models/product2';
import { product3 } from '../models/product3';
import { ProductServicesService } from '../Services/product-services.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
productsFromDB: product[]=[];
products2FromDB: product2[]=[];
products3FromDB: product3[]=[];
cartItems: product[] = [];
cart2Items: product2[] = [];
cart3Items: product3[] = [];
constructor(private productService:ProductServicesService, private cartService: CartService){
  this.getProduct();
  this.getProduct2();
  this.getProduct3();
}
getProduct(){
  this.productService.getProduct().subscribe(result=>{this.productsFromDB=result})
}
getProduct2(){
  this.productService.getProduct2().subscribe(result=>{this.products2FromDB=result})
}
getProduct3(){
  this.productService.getProduct3().subscribe(result=>{this.products3FromDB=result})
}
addToCart(product: product) {
  this.cartService.addToCart(product.id, product.Nume, product.Pret, product.Cantitate, product.Imagine);
  this.cartItems.push(product);
}

addToCart2(product: product2) {
  this.cartService.addToCart(product.id, product.Nume, product.Pret, product.Cantitate, product.Imagine);
  this.cart2Items.push(product);
}

addToCart3(product: product3) {
  this.cartService.addToCart(product.id, product.Nume, product.Pret, product.Cantitate, product.Imagine);
  this.cart3Items.push(product);
}
}
