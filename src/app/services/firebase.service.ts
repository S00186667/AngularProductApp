import { Route } from '@angular/compiler/src/core';
import { Injectable, NgZone } from '@angular/core';
//import { auth } from 'firebase/app';

import {AngularFireAuth} from '@angular/fire/auth'; 
import { idTokenResult, customClaims } from '@angular/fire/auth-guard';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

export interface User{
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  userState: any; 
  userAdmin: boolean; 

 // isLoggedIn = false; 

  constructor(public firebaseAuth: AngularFireAuth, 
    public afs: AngularFirestore, public router: Router, public ngZone: NgZone ) {


      this.firebaseAuth.authState.subscribe(user => {
        if(user){
          this.userState = user; 
          localStorage.setItem('user', JSON.stringify(this.userState)); 
          JSON.parse(localStorage.getItem('user')); 

        }else{
          localStorage.setItem('user',null); 
          JSON.parse(localStorage.getItem('user')); 
        }
      })
     }


     isAdmin(){
       return firebase.auth().currentUser.getIdTokenResult(true)
       .then((idTokenResult) => {
         const claim = idTokenResult; 
         if(claim.claims.admin) return true; else return false; 
       })
     }


 /* async signin(email : string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then((res=>{
      this.ngZone.run(() => {
        this.router.navigate(['shop']);
      });
      //make this true
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    }); 

    firebase.auth().currentUser.getIdTokenResult(true)
    .then((idTokenResult) => {
      const claim = idTokenResult; 
      console.log(this.userState.email);
      console.log(claim.claims.admin);
      if (claim.claims.admin) {
        this.userAdmin=true;
     }
    }); 
   
    

  }*/

  
  SignIn(email, password) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/shop']);
        });
        firebase.auth().currentUser.getIdTokenResult(true)
        .then((idTokenResult) => {
          const claim = idTokenResult;     
          console.log(this.userState.email);
          console.log(claim.claims.admin);
          if (claim.claims.admin) {
             this.userAdmin=true;
          }
        });

       this.SetUserData(result.user);


      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SignUp(email, password) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
        this.router.navigate(['shop']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SendVerificationMail() {
    return this.firebaseAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['email-verification']);
    })
} 


isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  return (user !== null && user.emailVerified !== false) ? true : false;
}

 /* async signup(email : string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      //make this true
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))

    
    })
  }*/

 /* logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }*/

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified


    }
    return userRef.set(userState, {
      merge: true
    })
  }

  SignOut() {
    this.userAdmin=false;
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userState=null;
      this.router.navigate(['login']);
    })
  }  
}
