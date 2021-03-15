import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 

  constructor(private http: HttpClient) { }

getChannels(channelName):Observable<any>{

  const API_KEY = "AIzaSyD-CJGEQQC0l5C09aHNT02Pe6ObN63jQvc"; 
  const url  = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ channelName +"&type=channel&key="+API_KEY+"&maxResults50"


  return this.http.get<any>(url)
}



}
