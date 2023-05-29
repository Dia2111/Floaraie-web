import { Component } from '@angular/core';
import { product3 } from '../models/product3';
import { ProductServicesService } from '../Services/product-services.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-aranjamente-vaza',
  templateUrl: './aranjamente-vaza.component.html',
  styleUrls: ['./aranjamente-vaza.component.css']
})
export class AranjamenteVazaComponent {
    products3FromDB: product3[]=[];
    cart3Items: product3[] = [];
    selectedProductDetails: string | undefined;


    constructor(private productService:ProductServicesService, private cartService: CartService){
      this.getProduct3();
    }
    getProduct3(){
      this.productService.getProduct3().subscribe(result=>{this.products3FromDB=result})
    }
    addToCart3(product: product3) {
      this.cartService.addToCart(product.id, product.Nume, product.Pret, product.Cantitate, product.Imagine);
      this.cart3Items.push(product);
    }
    showProductDetails(product: any) {
      this.selectedProductDetails = product.Detalii;
    }
  }
