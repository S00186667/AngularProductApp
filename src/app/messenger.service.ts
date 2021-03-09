import { Injectable } from '@angular/core';

//help us trigger and listen to something
import{Subject} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

subject = new Subject()



  constructor() { }

//called from the product item
  sendMsg(product){
   // console.log(product)
    this.subject.next(product) //triggering an event 

  }

  //called from inside the cart component
  getMsg(){

    //handle observable through subscribe method
    

    //anyone who calls the get method can subscribe
    return this.subject.asObservable()


  }
}
