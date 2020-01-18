import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.scss'],
})
export class ProDetailComponent implements OnInit {
  user: any;
  data: string[];

  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // this.data = this.route.snapshot.paramMap.getAll('descination');
    console.log(this.route.snapshot.paramMap.getAll('pro_id'));
  }

}
