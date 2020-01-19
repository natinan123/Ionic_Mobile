import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss'],
})
export class BuyerComponent implements OnInit {

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  constructor(
    private menu: MenuController,
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
