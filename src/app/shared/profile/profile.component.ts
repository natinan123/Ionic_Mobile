import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: any;
  email_id: any;
  fname: any;
  lname: any;
  phone: any;
  id_line: any;
  facebook: any;
  cus_detail: any;
  profile_pic: any;

  constructor(
    private session: SessionService,
    private service: ServerService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);
    this.getProfile();
  }


  getProfile() {
    this.service.getProfile(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.email_id = res[0].email_id;
        this.fname = res[0].fname;
        this.lname = res[0].lname;
        this.phone = res[0].phone;
        this.id_line = res[0].id_line;
        this.facebook = res[0].facebook;
 
        this.cus_detail = res[0].cus_detail;
        this.profile_pic = res[0].profile_pic;

      }
    )

  }
}
