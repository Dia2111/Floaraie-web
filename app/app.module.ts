import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatMenuModule } from '@angular/material/menu';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AranjamenteCutieComponent } from './aranjamente-cutie/aranjamente-cutie.component';
import { AranjamenteCosComponent } from './aranjamente-cos/aranjamente-cos.component';
import { AranjamenteVazaComponent } from './aranjamente-vaza/aranjamente-vaza.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import 'firebase/auth';
import { Aranjament1Component } from './aranjament1/aranjament1.component';
import { Aranjament2Component } from './aranjament2/aranjament2.component';
import { Aranjament3Component } from './aranjament3/aranjament3.component';
import { Aranjament4Component } from './aranjament4/aranjament4.component';
import { Aranjament5Component } from './aranjament5/aranjament5.component';
import { Aranjament6Component } from './aranjament6/aranjament6.component';
import { Aranjament7Component } from './aranjament7/aranjament7.component';
import { Aranjament8Component } from './aranjament8/aranjament8.component';
import { Aranjament9Component } from './aranjament9/aranjament9.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
//import { getDatabase } from 'firebase/database';

// // Initialize Firebase
// const firebaseConfig = environment.firebase;
// const firebaseApp = initializeApp(firebaseConfig);

// // Get a reference to the database
// const firebaseDatabase = getDatabase(firebaseApp);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    ShoppingCartComponent,
    AranjamenteCutieComponent,
    AranjamenteCosComponent,
    AranjamenteVazaComponent,
    Aranjament1Component,
    Aranjament2Component,
    Aranjament3Component,
    Aranjament4Component,
    Aranjament5Component,
    Aranjament6Component,
    Aranjament7Component,
    Aranjament8Component,
    Aranjament9Component,
    FooterComponent,
    CheckoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule, 
    MatInputModule, 
    MatDatepickerModule,
    MatFormFieldModule, 
    MatStepperModule, 
   MatNativeDateModule,
   CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

