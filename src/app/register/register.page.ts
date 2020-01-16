import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { ServerService } from '../@service/server.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any;


  public registerForm = new FormGroup({
    Fname: new FormControl(''),
    Lname: new FormControl(''),
    EmailRegis: new FormControl(''),
    Password: new FormControl(''),
    Repassword: new FormControl(''),
    Phone: new FormControl(''),
    Id_line: new FormControl(''),
    Cus_status: new FormControl(''),
  })
  Fname: any;
  Lname: any;
  EmailRegis: any;
  Password: any;
  Repassword: any;
  Phone: any;
  Id_line: any;
  Cus_status: any;
  password: any;
  repassword: any;

  constructor(
    private session: SessionService,
    private service: ServerService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);
  }


  onRegister() {
    // console.log(this.registerForm.value)
    const data = {
      fname: this.Fname,
      lname: this.Lname,
      email_id: this.EmailRegis,
      password: this.Password,
      repassword: this.Repassword,
      phone: this.Phone,
      id_line: this.Id_line,
      cus_status: this.Cus_status

    }
    console.log(data)//if  ทุก คอลัมไม่เท่ากับว่าง
    if (this.repassword === this.password) {
      this.service.onRegisterSell(data).subscribe(
        async (res) => {
          this.route.navigate(['/tabs/home']);

        }
      )
    }

  }
}