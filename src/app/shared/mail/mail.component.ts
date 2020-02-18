import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {
  user: any;
  My: any;
  Chatuser: Object;
  status: any;
  link: string;

  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,

  ) { }

  ngOnInit() {
   
    // console.log(this.user);
    this.getChatUser();
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

  // ดูผู้ติดต่อ
  getChatUser() {
    const source = this.user[0].email_id;
    this.service.getChatUser(source).subscribe(
      (res) => {
        console.log(res);
        this.Chatuser = res;
      })
  }
}
