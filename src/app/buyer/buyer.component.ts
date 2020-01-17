import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
})
export class BuyerComponent implements OnInit {


  constructor(
    private session: SessionService,
    private route: Router,
    private service: ServerService,
  ) { }

  ngOnInit() {
   
  }

  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/login'])
  }
}
