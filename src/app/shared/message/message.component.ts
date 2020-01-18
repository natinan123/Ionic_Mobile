import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  user: any;

  chat: Object;
  data;
  name: any;
  descination: string[];
  fname: any;
  lname: any;
  profile_pic: any;
  My: any;
  taxtChat = new FormControl('');

  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // !
  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.descination = this.route.snapshot.paramMap.getAll('descination');
    this.My = this.user[0].email_id;

    console.log(this.user);
    console.log(this.descination);

    this.getChatDetail();
  }


  ดูข้อความ
  getChatDetail() {
    const source = this.user[0].email_id;
    const descination = this.descination;
    this.service.getChat(source, descination).subscribe(
      (res) => {
        console.log(res);
        this.chat = res;
        this.fname = res[0].fname;
        this.lname = res[0].lname;
        this.profile_pic = res[0].profile_pic;
      })
  }


  // ส่งข้อความติดต่อ
  postTaxtChat() {
    const data = {
      source: this.user[0].email_id,
      descination: this.descination,
      mes_text: this.taxtChat.value
    }
    console.log(data);
    this.service.postChat(data).subscribe(
      async (res) => {
        this.getChatDetail();
        this.clearInputMethod1();

      }
    )
  }

  // ล้างข้อความ
  clearInputMethod1() {
    this.taxtChat.reset();
  }



}
