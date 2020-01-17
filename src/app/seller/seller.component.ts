import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {


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
