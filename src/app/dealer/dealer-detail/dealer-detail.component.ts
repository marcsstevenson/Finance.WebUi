import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

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

  private dealership: any;

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
    this.dealership = this._dealershipService.getDealership(dealershipId)
    .then((dealership) => {
      this.dealership = dealership;
      console.log(this.dealership);
    })
    .catch((err) => {
      console.log(err); // dont do this, show the user a nice message
    });
  }

  save() {
    //todo: need to get customer number to make this save work properly
    if (this.dealership.Number == null) {
      // default dealership number for now. 
      // will discuss what this number does here later.
      this.dealership.Number = '1';
    }

    this._dealershipService.addOrSaveDealership(this.dealership)
    .then((response) => {
      console.log('Saved successfully: ', response);
      // this.router.navigateByUrl('/deal');
    })
    .catch((err) => {
      console.log(err); // dont do this, show the user a nice message
    });
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

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
