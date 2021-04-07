import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {FirebaseService} from 'src/app/services/firebase.service'

import{AngularFireAuth} from '@angular/fire/auth'; 
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup; 
  isSignedIn =false
  constructor(public FirebaseService: FirebaseService, private router: Router){}

  ngOnInit(): void {

    if(localStorage.getItem('user') !== null)
    this.isSignedIn = true 
    else
    this.isSignedIn = false
  }

  async onSignup(email:string, password:string){

    await this.FirebaseService.SignUp(email, password)
    if (this.FirebaseService.isLoggedIn)
     this.isSignedIn = true

     this.router.navigate([''])


     
    const registerForm = new FormGroup({
      email: new FormControl([Validators.required, Validators.minLength(3)]), 
      password: new FormControl([Validators.required]), 
    })

  }


}
