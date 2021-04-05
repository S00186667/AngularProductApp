import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {FirebaseService} from 'src/app/services/firebase.service'

import{AngularFireAuth} from '@angular/fire/auth'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSignedIn =false
  constructor(public FirebaseService: FirebaseService, private router: Router){}

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

     this.router.navigate([''])

  }


}
