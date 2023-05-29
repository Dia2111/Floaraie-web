import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { AranjamenteCutieComponent } from './aranjamente-cutie/aranjamente-cutie.component';
import { AranjamenteCosComponent } from './aranjamente-cos/aranjamente-cos.component';
import { AranjamenteVazaComponent } from './aranjamente-vaza/aranjamente-vaza.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Aranjament1Component } from './aranjament1/aranjament1.component';
import { Aranjament2Component } from './aranjament2/aranjament2.component';
import { Aranjament3Component } from './aranjament3/aranjament3.component';
import { Aranjament4Component } from './aranjament4/aranjament4.component';
import { Aranjament5Component } from './aranjament5/aranjament5.component';
import { Aranjament6Component } from './aranjament6/aranjament6.component';
import { Aranjament7Component } from './aranjament7/aranjament7.component';
import { Aranjament8Component } from './aranjament8/aranjament8.component';
import { Aranjament9Component } from './aranjament9/aranjament9.component';

const routes: Routes = [
 { path: '' , component: MainComponent },
{ path: 'cart' , component: ShoppingCartComponent},
{path: 'aranjamente_cutie', component: AranjamenteCutieComponent},
{path: 'aranjamente_cos', component: AranjamenteCosComponent},
{path: 'aranjamente_vaza', component: AranjamenteVazaComponent},
{path: 'checkout', component: CheckoutComponent},
{path: 'a1', component: Aranjament1Component},
{path: 'a2', component: Aranjament2Component},
{path: 'a3', component: Aranjament3Component},
{path: 'a4', component: Aranjament4Component},
{path: 'a5', component: Aranjament5Component},
{path: 'a6', component: Aranjament6Component},
{path: 'a7', component: Aranjament7Component},
{path: 'a8', component: Aranjament8Component},
{path: 'a9', component: Aranjament9Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

