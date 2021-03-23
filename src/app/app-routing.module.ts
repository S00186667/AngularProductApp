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
const routes: Routes =[
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingListComponent}, 
  {path: 'youtube', component: YoutubeComponent},
  {path: 'crud', component: ProductCrudComponent},
  {path: 'update/:id', component: UpdateProductComponent},
  {path: '**', component: PageNotFoundComponent}
]
@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
