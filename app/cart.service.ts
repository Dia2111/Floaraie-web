import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = { items: [], total: 0 };

  constructor() { }

  addToCart(id: number, Nume: string, Pret: number, Cantitate: number = 1, Imagine: string) {
    let addedItem = this.cart.items.find((i: any) => i.id === id && i.Pret === Pret);
    if (addedItem) {
      addedItem.Cantitate += Cantitate;
    } else {
      this.cart.items.push({ id, Nume, Pret, Cantitate, Imagine});
    }
    this.cart.total += Pret * Cantitate;
  }
  
  removeFromCart(item: any) {
    let index = this.cart.items.findIndex((i: any) => i.id === item.id && i.Pret === item.Pret);
    if (index !== -1) {
      let removedItem = this.cart.items.splice(index, 1)[0];
      this.cart.total -= removedItem.Pret * removedItem.Cantitate;
    }
  }
  increaseQuantity(item: any) {
    item.Cantitate++;
    this.cart.total += item.Pret;
  }

  decreaseQuantity(item: any) {
    if (item.Cantitate > 1) {
      item.Cantitate--;
      this.cart.total -= item.Pret;
    }
  }
  getCart() {
    return this.cart;
  }

  getCartData() {
    // Retrieve the cart data from local storage or other data storage mechanism
    const cartData = localStorage.getItem('cartData');
  
    // Check if cartData is null, and provide a default value if needed
    const defaultCartData = ''; // Set your default value here
    const parsedCartData = cartData !== null ? JSON.parse(cartData) : defaultCartData;
  
    return parsedCartData;
  }
}
