import { Component, OnInit } from '@angular/core';
import { ServerService } from '../@service/server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: Object;
  poppular: Object;
  recoms: Object;


  constructor(
    private service: ServerService,
  ) { }

  ngOnInit() {

    this.getProperty();
    this.getPoppular();
    this.getRecom();
  }


  getProperty() {
    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
        console.log(this.products);

      })
  }

  getPoppular() {
    this.service.getPoppular().subscribe(
      (res) => {
        console.log(res);
        this.poppular = res;
        console.log(this.poppular);

      })
  }

  getRecom() {
    this.service.getRecommainpage().subscribe(
      (res) => {
        console.log(res);
        this.recoms = res;
        console.log(this.recoms);
        // this.recom_pic = res.result;
        // console.log(this.recom_pic);
      })
  }
}

