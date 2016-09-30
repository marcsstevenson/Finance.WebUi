import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import * as moment from 'moment';

import { DealerService } from '../dealer.service';
import { DealershipData } from '../mockup-data';


@Component({
  moduleId: module.id,
  selector: 'app-dealer-detail',
  templateUrl: 'dealer-detail.component.html',
  styleUrls: ['dealer-detail.component.css'],
  providers: [DealerService]
})
export class DealerDetailComponent implements OnInit, OnDestroy {

  private dealership: any = {};
  private copyDealership: any = {};
  private basicInfoChanged = false;
  private contactDetailsChanged = false;
  private bankDetailsChanged = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dealershipService: DealerService
  ) { }

  ngOnInit() {
    // load mock datat to test bindings
    // this.dealership = DealershipData[0];

    //todo: need to fix bad request. Likely issue from api side
    let dealershipId = this.route.snapshot.params['id'];

    if (dealershipId !== 'new') {
      this.loadDealership(dealershipId);
    }
  }

  save() {
    //todo: need to get customer number to make this save work properly
    if (this.dealership.Number == null) {
      // default dealership number for now. 
      // will discuss what this number does here later.
      this.dealership.Number = '1';
    }

    this.dealership.IsEnabled = this.dealership.IsEnabled || true;

    this._dealershipService.addOrSaveDealership(this.dealership)
      .then((response) => {
        console.log('Saved successfully: ', response);

        this.router.navigate(['/dealership', response.CommittedId]);
        this.dealership.Id = response.CommittedId;
        this.resetAllChangedStatus();
        this.copyDealership = Object.assign({}, this.dealership);
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  cancel() {
    this.resetAllChangedStatus();
    this.dealership = Object.assign({}, this.copyDealership);
  }

  delete() {
    this._dealershipService.deleteDealership(this.dealership.Id)
      .then((response) => {
        console.log('Deleted successfully: ', response);
        this.router.navigateByUrl('/deal');
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  private setDealershipDefault() {
    if (this.dealership.IsEnabled === undefined) {
      this.dealership.IsEnabled = true;
    }
  }

  private loadDealership(dealershipId) {
    this._dealershipService.getDealership(dealershipId)
      .then((dealership) => {
        this.dealership = dealership;
        this.copyDealership = Object.assign({}, dealership);
        console.log(this.dealership);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  private resetAllChangedStatus() {
    this.basicInfoChanged = false;
    this.contactDetailsChanged = false;
    this.bankDetailsChanged = false;
  }

  private setDefaultData() {
    // this.deal.

    if (this.dealership.DateCreated === undefined) {
      this.dealership.DateCreated = moment().utc();
    }

    if (this.dealership.DateModified === undefined) {
      this.dealership.DateModified = moment().utc();
    }
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
