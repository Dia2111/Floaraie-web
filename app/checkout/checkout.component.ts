import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

    cart: any;
  
    constructor(private cartService: CartService) {
      this.cart = cartService.getCart();
      
  }

  //checkoutForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.checkoutForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     address: ['', Validators.required],
  //     city: ['', Validators.required],
  //     state: ['', Validators.required],
  //     zip: ['', Validators.required],
  //     cardName: ['', Validators.required],
  //     cardNumber: ['', Validators.required],
  //     expMonth: ['', Validators.required],
  //     expYear: ['', Validators.required],
  //     cvv: ['', Validators.required]
  //   });
  // }
  
  // onSubmit() {
  //   if (this.checkoutForm.valid) {
  //     // Form is valid, perform necessary actions
  //     const formData = this.checkoutForm.value;
  //     // Send form data to server or process it locally
  //     console.log(formData);
      
  //     // Reset the form after submission
  //     this.checkoutForm.reset();
  //   } else {
  //     // Form is invalid, display error messages or handle accordingly
  //   }
  // }
}

