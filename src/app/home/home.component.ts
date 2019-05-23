import { Component, OnInit } from '@angular/core';
import { MusicserviceService} from '../musicservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private musicService:MusicserviceService) { }
  arrayOfMusic:any=[];
  ngOnInit() {

    this.musicService.getTrendMusic().subscribe((data:any)=>

      {

          console.log(data.tracks.track);

          this.arrayOfMusic=data.tracks.track;

      });
  }
  addToFavsfromTrend(music){
    this.musicService.setFavouriteMusicTrends(music);
  }
}
