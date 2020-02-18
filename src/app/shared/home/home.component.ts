import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Object;
  poppular: Object;
  recoms: Object;
  user: any;
  status: any;
  link: string;


  constructor(
    private service: ServerService,
    private session: SessionService,

  ) { }

  ngOnInit() {

    this.getProperty();
    this.getPoppular();
    this.getRecom();
    this.user = this.session.getActiveUser();
    this.status = this.user[0].cus_status;
    if (this.user[0].cus_status == null || this.user[0].cus_status == "") {
      this.link = '/mainpage/mainpage/message';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/message';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/message';
    } 
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/message';
    }
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
