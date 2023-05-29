import { Component } from '@angular/core';
import { product2 } from '../models/product2';
import { ProductServicesService } from '../Services/product-services.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-aranjamente-cos',
  templateUrl: './aranjamente-cos.component.html',
  styleUrls: ['./aranjamente-cos.component.css']
})
export class AranjamenteCosComponent {
  products2FromDB: product2[] = [];
  cart2Items: product2[] = [];
  selectedProductDetails: string | undefined;

  constructor(private productService: ProductServicesService, private cartService: CartService) {
    this.getProduct2();
  }

  getProduct2() {
    this.productService.getProduct2().subscribe(result => {
      this.products2FromDB = result;
    });
  }

  addToCart2(product: product2) {
    this.cartService.addToCart(product.id, product.Nume, product.Pret, product.Cantitate, product.Imagine);
    this.cart2Items.push(product);
  }
  showProductDetails(product: any) {
  this.selectedProductDetails = product.Detalii;
}
}
