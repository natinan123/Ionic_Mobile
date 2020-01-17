import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  public updateprofile = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    phone: new FormControl(''),
    id_line: new FormControl(''),
    facebook: new FormControl(''),
    cus_detail: new FormControl('')
  })
  
  user: any;
  email_id: any;
  fname: any;
  lname: any;
  phone: any;
  id_line: any;
  facebook: any;
  pro_limit: any;
  cus_detail: any;
  profile_pic: any;



  constructor(
    private session: SessionService,
    private service: ServerService,
    private route: Router,

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
        this.pro_limit = res[0].pro_limit;
        this.cus_detail = res[0].cus_detail;
        this.profile_pic = res[0].profile_pic;

      }
    )

  }

  
  onUpdateprofile() {
    const data = {
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      id_line: this.id_line,
      facebook: this.facebook,
      cus_detail: this.cus_detail,
      email_id: this.user[0].email_id
    }
    console.log(data)
    this.service.putProfile(data).subscribe(
      async (res) => {
        this.route.navigate(['/seller/seller/favorite'])
    
      }
      
    )
  }

}
