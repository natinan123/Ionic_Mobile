import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { ServerService } from '../@service/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {
  user: any;

  constructor(
    private session: SessionService,
    private service: ServerService,
    private route: Router,
  ) { }

  ngOnInit() {
    // this.user = this.session.getActiveUser();

    // if (this.user == null || this.user === "") {
    //   this.route.navigate(['/login'])
    // }
    // if (this.user !== null || this.user !== "") {
    //   if (this.user[0].cus_status === "admin" && this.user[0].cus_status != null && this.user[0].cus_status !== "") {
    //     this.route.navigate(['/'])
    //   }
    //   if (this.user[0].cus_status === "seller" && this.user[0].cus_status != null && this.user[0].cus_status !== "") {
    //     this.route.navigate(['/seller/seller/'])
    //   }
    //   if (this.user[0].cus_status === "buyer" && this.user[0].cus_status != null && this.user[0].cus_status !== "") {
    //     this.route.navigate(['/buyer/buyer/'])
    //   }

    // }
  }

}
