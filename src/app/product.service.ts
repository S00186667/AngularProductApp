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

    return this.http.get<IProduct[]>(`${this.dataUri}?limit=5`)
      .pipe(
        catchError(this.handleError
          )
      )
  }

  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(this.dataUri, product)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateProduct(id:string, product: IProduct): Observable<IProduct>{
    console.log('subscrbing to update' + id); 
    let productURI: string = this.dataUri + '/' + id; 
    return this.http.put<IProduct>(productURI, product)
    .pipe(
      catchError(this.handleError)
    )
  }
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
