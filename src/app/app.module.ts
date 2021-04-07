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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
 import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './componets/shared/page-not-found/page-not-found.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NewproductlistComponent } from './newproductlist/newproductlist.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";


import { StoreModule } from '@ngrx/store';
import { wishlistreducer } from 'src/app/reducers/wishlist.reducer';

import {environment} from 'src/environments/environment';
import { AdminAreaComponent } from './admin-area/admin-area.component' 



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
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    YoutubeComponent,
    ProductCrudComponent,
    UpdateProductComponent,
    NewProductFormComponent,
    WishlistComponent,
    NewproductlistComponent,
    AdminAreaComponent,

   
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    StoreModule.forRoot({WishList: wishlistreducer}),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
