import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DealService } from '../deal.service';
// import { TinyEditor } from '../../shared/directives/tiny-editor/tiny-editor.directive';

import { DealsData } from '../mockup-data';
import * as moment from 'moment';

declare var tinymce: any;

@Component({
  moduleId: module.id,
  selector: 'app-deal-detail',
  templateUrl: 'deal-detail.component.html',
  styleUrls: ['deal-detail.component.css'],
  providers: [DealService]
})
export class DealDetailComponent implements OnInit {

  public notes: Array<any>;

  private deal: any = {};
  private customerId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dealService: DealService
  ) { }

  ngOnInit() {

    tinymce.init(
      {
        selector: "#test",
      });

    let dealId = this.route.snapshot.params['id'];
    this.customerId = this.route.snapshot.params['customerId'];

    if (dealId !== 'new') {
      this.loadDeal(dealId);
    }
    else if (this.customerId) {
      this.deal = {};
      this.deal.CustomerId = this.customerId;
    }
  }

  save() {
    this.setDefaultData();
    this._dealService.addOrSaveDeal(this.deal)
      .then((response) => {
        console.log('Saved successfully: ', response);

        if (this.customerId != null) {
          this.router.navigate(['/customer', this.customerId]);
        }
        // this.router.navigateByUrl('/deal');
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  delete() {
    this._dealService.deleteDeal(this.deal.Id)
      .then((response) => {
        console.log('Deleted successfully: ', response);
        this.router.navigateByUrl('/deal');
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  private setDefaultData() {
    // this.deal.

    if (this.deal.DateCreated === undefined) {
      this.deal.DateCreated = moment().utc();
    }

    if (this.deal.DateModified === undefined) {
      this.deal.DateModified = moment().utc();
    }

    if (this.deal.Number === undefined) {
      this.deal.Number = '0';
    }

    if (this.deal.DealStatus === undefined) {
      this.deal.DealStatus = '2'; //pending sign up
    }
  }

  private loadDeal(dealId) {

    this._dealService.getDeal(dealId)
      .then((deal) => {
        this.deal = deal;
        console.log(this.deal);
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });

  }

}
