import { Injectable } from '@angular/core';
import {IProduct} from 'model/product'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataUri ='http://localhost:5000/Beauty'

  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]>{

    console.log("get products called"); 

    return this.http.get<IProduct[]>(`${this.dataUri}?limit=20`)
      .pipe(
        catchError(this.handleError
          )
      )
  }

  getProductById(_id: string): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.dataUri}/${_id}`)
  }

  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(this.dataUri, product)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateProduct(_id:string, product: IProduct): Observable<IProduct>{
   // console.log('subscrbing to update' + id); 
  //  let productURI: string = this.dataUri + '/' + id; 
  //  console.log(productURI); 
    return this.http.put<IProduct>(`${this.dataUri}/${_id}`, product)
   //// .pipe(
    //  catchError(this.handleError)
  //  )
  }


  deleteProduct(_id : string) : Observable<IProduct>{
    let productURI: string = this.dataUri +'/' + (_id); 
    return this.http.delete<IProduct>(productURI)
    .pipe(
      catchError(this.handleError)
    )
  
  
  
   }


 /* deleteProduct(id: string): Observable<any>{
    return this.http.delete(`${this.dataUri}/${id}`, {responseType: 'text'});

  }*/


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }




}
