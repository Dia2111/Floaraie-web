import { Component } from '@angular/core';
import { product } from '../models/product';
import { ProductServicesService } from '../Services/product-services.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-aranjamente-cutie',
  templateUrl: './aranjamente-cutie.component.html',
  styleUrls: ['./aranjamente-cutie.component.css']
})
export class AranjamenteCutieComponent {
  productsFromDB: product[]=[];
  cartItems: product[] = [];
  selectedProductDetails: string | undefined;

  constructor(private productService:ProductServicesService , private cartService: CartService){
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(result=>{this.productsFromDB=result})
  }
  addToCart(product: product) {
    this.cartService.addToCart(product.id, product.Nume, product.Pret, product.Cantitate, product.Imagine);
    this.cartItems.push(product);
  }
  showProductDetails(product: any) {
    this.selectedProductDetails = product.Detalii;
  }
  }
  
