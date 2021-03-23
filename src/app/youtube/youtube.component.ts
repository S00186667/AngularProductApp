import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import {YoutubeService} from 'src/app/youtube.service'; 

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  title = 'RedoProduct-Application';

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
    })

}
}
