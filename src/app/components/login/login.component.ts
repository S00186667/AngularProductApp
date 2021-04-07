import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import {FirebaseService} from 'src/app/services/firebase.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup; 
  isSignedIn =false
  constructor(public FirebaseService: FirebaseService){}

 // constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true 
    else
    this.isSignedIn = false


    const loginForm = new FormGroup({
      email: new FormControl([Validators.required, Validators.minLength(3)]), 
      password: new FormControl([Validators.required]), 
    })

    
  }

  async onSignin(email:string, password:string){

    await this.FirebaseService.SignIn(email, password)
    if (this.FirebaseService.isLoggedIn)
     this.isSignedIn = true

  }

  handleLogout(){

    this.isSignedIn = false

  }

}
