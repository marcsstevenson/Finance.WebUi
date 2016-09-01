import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DealService } from '../deal.service';
import { DealsData } from '../mockup-data';

@Component({
  moduleId: module.id,
  selector: 'app-deals',
  templateUrl: 'deals.component.html',
  styleUrls: ['deals.component.css'],
  providers: [DealService]
})
export class DealsComponent implements OnInit {

  public rows: Array<any> = [];
  private data = DealsData;


  constructor(
    private router: Router,
    private _dealService: DealService) { }

  ngOnInit() {
    this.rows = this.data;

    // this._dealService.getDeals()
    // .then((deals) => {
    //   this.rows = deals;
    //   console.log(this.rows);
    // })
    // .catch((err) => {
    //   //todo: show err message to users later
    //   console.log(err);
    // });
  }

  public addDeal () {
    this.router.navigate(['/deal', 'new']);
  }

}
