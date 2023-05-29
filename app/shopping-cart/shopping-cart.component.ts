import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { product } from '../models/product';
import { product2 } from '../models/product2';
import { product3 } from '../models/product3';
import { ProductServicesService } from '../Services/product-services.service';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: any;
  product: any;
  productsFromDB: product[]=[];
  products2FromDB: product2[]=[];
  products3FromDB: product3[]=[];
  cartItems: product[] = [];
  cart2Items: product2[] = [];
  cart3Items: product3[] = [];
  private firebaseDatabase: any;

  constructor(
    private cartService: CartService,
    private productService: ProductServicesService
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.getProduct();
    this.getProduct2();
    this.getProduct3();
    const firebaseConfig = environment.firebase;
    const firebaseApp = initializeApp(firebaseConfig);
    this.firebaseDatabase = getDatabase(firebaseApp);
  }

  getProduct() {
    this.productService.getProduct().subscribe(result => {
      this.productsFromDB = result;
    });
  }

  getProduct2() {
    this.productService.getProduct2().subscribe(result => {
      this.products2FromDB = result;
    });
  }

  getProduct3() {
    this.productService.getProduct3().subscribe(result => {
      this.products3FromDB = result;
    });
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getCart();
  }

  increaseQuantity(item: any) {
    this.cartService.increaseQuantity(item);
    this.cart = this.cartService.getCart();
  }

  decreaseQuantity(item: any) {
    this.cartService.decreaseQuantity(item);
    this.cart = this.cartService.getCart();
  }

  saveCartToDatabase(cartData: any) {
    const cartRef = ref(this.firebaseDatabase, 'carts');
    set(cartRef, cartData);
  }

  onSaveCart() {
    const yourCartData = JSON.stringify(this.cartService.getCart());
    this.saveCartToDatabase(yourCartData);
  }
}
