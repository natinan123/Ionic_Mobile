import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { ServerService } from '../@service/server.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email_id;
  password;
  public loginUser = new FormGroup({
    email_id: new FormControl(''),
    password: new FormControl(''),

  })
  user: any;
  constructor(

    private session: SessionService,
    private service: ServerService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();

  }


  onLogin() {
    // console.log(this.loginUser.value)
    const data = {
      email_id: this.email_id,
      password: this.password
    }
    console.log(data)
    if (this.email_id != null && this.password != null) {
      this.service.getLogin(data).subscribe(
        async (res) => {
          this.session.setActiveUser(res);
          if (res[0].cus_status === "admin") {
            this.route.navigate(['/seller']);
          }
          if (res[0].cus_status === "seller") {
            this.route.navigate(['/seller']);
          }
          if (res[0].cus_status === "buyer") {
            this.route.navigate(['/buyer']);
          }
        }

      )
    }

  }

}
