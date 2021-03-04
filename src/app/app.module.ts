import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
//import {RouterModule } from '@angular/router'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './componets/shared/header/header.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { NavComponent } from './componets/shared/nav/nav.component';
import { ShoppingListComponent } from './componets/shopping-list/shopping-list.component';
import { FiltersComponent } from './componets/shopping-list/filters/filters.component';
import { CartComponent } from './componets/shopping-list/cart/cart.component';
import { CartItemComponent } from './componets/shopping-list/cart-item/cart-item.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingListComponent,
    FiltersComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
