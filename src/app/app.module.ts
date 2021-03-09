import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from '@angular/fire'; 

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
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';



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
    HomeComponent,
   
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD1CrU6cbBauKqsczBS_ZasWnVm049Ewds",
      authDomain: "osdproject-c75bf.firebaseapp.com",
      projectId: "osdproject-c75bf",
      storageBucket: "osdproject-c75bf.appspot.com",
      messagingSenderId: "395094359455",
      appId: "1:395094359455:web:941110c085e653721e51aa"
    })

  
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
