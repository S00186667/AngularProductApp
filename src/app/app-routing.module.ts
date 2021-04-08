import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './componets/shopping-list/shopping-list.component';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from  './components/register/register.component';
import {PageNotFoundComponent} from './componets/shared/page-not-found/page-not-found.component'; 
import { YoutubeComponent } from './youtube/youtube.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NewproductlistComponent } from './newproductlist/newproductlist.component';

import {AngularFireAuthGuard, canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']); 

const routes: Routes =[
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, },
  {path: 'register', component: RegisterComponent},
  {path: 'shop', 
  component: ShoppingListComponent}, 
  {path: 'youtube', component: YoutubeComponent},
  {path: 'detail/:id', component: ProductDetailsComponent},
  {path: 'form', component: NewproductlistComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'crud', component: ProductCrudComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}, 
  {path: 'admin', component: AdminAreaComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}, 
  {path: 'update/:id', component: UpdateProductComponent},
  {path: '**', component: PageNotFoundComponent}
]
@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
