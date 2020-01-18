import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  products: Object;

  
  constructor(
    private service: ServerService,

  ) { }

  ngOnInit() {
    this.getProperty()
  }


  getProperty() {
    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
        console.log(this.products);

      })
  }

  


}
