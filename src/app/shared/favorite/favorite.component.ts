import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  user: any;
 

  constructor(
    private session: SessionService,
    private service: ServerService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);

  }

}
