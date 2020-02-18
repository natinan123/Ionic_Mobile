import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { Platform } from '@ionic/angular';
import { SessionService } from 'src/app/@service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  products: Object;
  searchText;
  user: any;
  status: any;
  link: string;

  
  constructor(
    public platform: Platform,
    private session: SessionService,
    private service: ServerService,
    private route: Router,

  ) { }

  ngOnInit() {
    this.getProperty()
    this.user = this.session.getActiveUser();
    this.status = this.user[0].cus_status;
    if (this.user[0].cus_status == null || this.user[0].cus_status == "") {
      this.link = '/mainpage/mainpage/prodetail';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/prodetail';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/prodetail';
    } 
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/prodetail';
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

  


}
