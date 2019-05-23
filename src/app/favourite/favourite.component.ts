import { Component, OnInit } from '@angular/core';
import {MusicserviceService} from '../musicservice.service';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
musiclist:any=[];
  constructor(private musicService:MusicserviceService) { }

  ngOnInit() {
    this.musicService.getFavouriteMusicTrends().subscribe(data=>{
      this.musiclist=data;
      console.log(data);
      console.log(this.musiclist);
    });
  }

}
