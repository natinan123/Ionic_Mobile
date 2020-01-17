import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  type_id = new FormControl('');
  height = 0;
  markers: Object;
  lat2: number;
  lng2: number;
  // type_id: any;


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
    // console.log(this.type_id);
    // this.onGetHouse();

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

  // เลือกประเภท
  onGetHouse(type_id) {
    console.log(type_id);
    this.service.getProtype(type_id).subscribe(
      (res) => {
        console.log(res);

        this.markers = res;

      })
  }

}
