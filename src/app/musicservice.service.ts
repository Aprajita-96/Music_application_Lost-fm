import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MusicserviceService {
url:string='http://localhost:3004/posts';
  constructor(private http:HttpClient) { }
  getTrendMusic():any{

    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=d4b8d5ad9d3febf5a346532003391691&format=json");

  }
  setFavouriteMusicTrends(music){
    return this.http.post(this.url,{music}).subscribe();
  }
  getFavouriteMusicTrends(){
  return this.http.get('http://localhost:3004/posts');
}
}
