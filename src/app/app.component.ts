import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import {YoutubeService} from 'src/app/youtube.service'; 
import { Route } from '@angular/compiler/src/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators'; 


//turns this into an any
declare var gtag; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(router: Router){
    //observable
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );

    navEndEvents.subscribe((event: NavigationEnd) => {

      //google tag configuration
      
      gtag('config', 'UA-193817959-1', {
        'page_path': event.urlAfterRedirects
      });
    }); 
  }
 
 ngOnInit(){

 }
 
  /*title = 'RedoProduct-Application';
  

  channels:any

  //this is the user input to search the channels of the youtube api
  @ViewChild('channelName') channelName: ElementRef; 

  constructor(private youtube: YoutubeService){}

  ngOnInit(){
    this.youtube.getChannels("makeup").subscribe((data) => {
      console.log(data)

      this.channels = data.items
    })
  
  }

  getData(){
    //get the value of the user 
    var channelName = this.channelName.nativeElement.value 

    this.youtube.getChannels(channelName).subscribe((data) => {
      console.log(data)

      this.channels = data.items
    })*/

}

 

 /* isSignedIn =false
  constructor(public FirebaseService: FirebaseService){}

  ngOnInit(){
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

  async onSignin(email:string, password:string){

    await this.FirebaseService.signin(email, password)
    if (this.FirebaseService.isLoggedIn)
     this.isSignedIn = true

  }

  handleLogout(){

    this.isSignedIn = false

  }*/


