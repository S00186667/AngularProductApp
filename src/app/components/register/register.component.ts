import { Component, OnInit } from '@angular/core';

import {FirebaseService} from 'src/app/services/firebase.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSignedIn =false
  constructor(public FirebaseService: FirebaseService){}

  ngOnInit(): void {

    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true 
    else
    this.isSignedIn = false
  }

  async onSignup(email:string, password:string){

    await this.FirebaseService.signup(email, password)
    if (this.FirebaseService.isLoggedIn)
     this.isSignedIn = true

  }

}
