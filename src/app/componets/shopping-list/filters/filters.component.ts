import { Component, OnInit } from '@angular/core';
import {Ng2OrderModule} from 'ng2-order-pipe'; 
import {Ng2SearchPipeModule} from 'ng2-search-filter'; 
import {NgxPaginationModule} from 'ngx-pagination'; 

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
