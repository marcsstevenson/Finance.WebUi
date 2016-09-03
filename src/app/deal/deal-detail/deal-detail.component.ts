import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DealService } from '../deal.service';
// import { TinyEditor } from '../../shared/directives/tiny-editor/tiny-editor.directive';

import { DealsData } from '../mockup-data';

declare var tinymce: any;

@Component({
  moduleId: module.id,
  selector: 'app-deal-detail',
  templateUrl: 'deal-detail.component.html',
  styleUrls: ['deal-detail.component.css'],
  providers: [DealService]
})
export class DealDetailComponent implements OnInit {

  private deal: any;
  public notes: Array<any>;

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
    this.deal = this._dealService.getDeal(dealId)
    .then((deal) => {
      this.deal = deal;
      console.log(this.deal);
    })
    .catch((err) => {
      console.log(err); // dont do this, show the user a nice message
    });
  }

  save() {
    this._dealService.addOrSaveDeal(this.deal)
    .then((response) => {
      console.log('Saved successfully: ', response);
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

}
