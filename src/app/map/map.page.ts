import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SessionService } from '../@service/session.service';
import { ServerService } from '../@service/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
 
  height = 0;
  markers: Object;
  lat2: number;
  lng2: number;


  constructor(
    public platform: Platform,
    private session: SessionService,
    private service: ServerService,
    private route: Router,
  ) { 
    console.log(platform.height());
    this.height = platform.height() - 56;
  }

  ngOnInit() {
    this.getMappro();
    this.getUserLocation();
  }

    // ที่อยู่ผู้ใช้
    private getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.lat2 = position.coords.latitude;
          this.lng2 = position.coords.longitude;
  
        });
      }
    }

  getMappro() {
    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);

        this.markers = res;

      })
  }


}
