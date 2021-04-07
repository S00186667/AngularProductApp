import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {

  constructor(public ngAuthService: FirebaseService) { }

  ngOnInit(): void {
  }

  addAdmin(email) {
    let addRole=firebase.functions().httpsCallable('addAdminRole');
    console.log(email.value)
    addRole({email:email.value})
    .then((result) => {
      // Read result of the Cloud Function.
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
   return false;
  }

  removeAdmin(email) {
    let removeRole=firebase.functions().httpsCallable('removeAdminRole');
    removeRole({email:email.value})
    .then((result) => {
      // Read result of the Cloud Function.
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
   return false;
  }

}
