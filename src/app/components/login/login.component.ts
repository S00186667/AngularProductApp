import { Component, OnInit } from '@angular/core';


import {FirebaseService} from 'src/app/services/firebase.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn =false
  constructor(public FirebaseService: FirebaseService){}

 // constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true 
    else
    this.isSignedIn = false

    
  }

  async onSignin(email:string, password:string){

    await this.FirebaseService.signin(email, password)
    if (this.FirebaseService.isLoggedIn)
     this.isSignedIn = true

  }

  handleLogout(){

    this.isSignedIn = false

  }

}
