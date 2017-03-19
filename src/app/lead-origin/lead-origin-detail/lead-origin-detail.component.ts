import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import * as moment from 'moment';

import { LeadOriginService } from '../lead-origin.service';
import { LeadOriginData } from '../mockup-data';


@Component({
  //moduleId: module.id,
  selector: 'app-leadOrigin-detail',
  templateUrl: './lead-origin-detail.component.html',
  styleUrls: ['./lead-origin-detail.component.scss'],
  providers: [LeadOriginService]
})
export class LeadOriginDetailComponent implements OnInit, OnDestroy {

  private leadOrigin: any = {};
  private copyLeadOrigin: any = {};
  private basicInfoChanged = false;
  private contactDetailsChanged = false;
  private bankDetailsChanged = false;
  private isNew = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _leadOriginService: LeadOriginService
  ) { }

  ngOnInit() {
    // load mock datat to test bindings
    // this.leadOrigin = LeadOriginData[0];

    //todo: need to fix bad request. Likely issue from api side
    let leadOriginId = this.route.snapshot.params['id'];
    this.isNew = leadOriginId === 'new';

    if (!this.isNew) {
      this.loadLeadOrigin(leadOriginId);
    }
  }

  save() {
    this.leadOrigin.IsDefault = this.leadOrigin.IsDefault || true;

    this._leadOriginService.addOrSaveLeadOrigin(this.leadOrigin)
      .then((response) => {
        console.log('Saved successfully: ', response);

        this.router.navigate(['/lead-origin', response.CommittedId]);
        this.leadOrigin.Id = response.CommittedId;
        this.resetAllChangedStatus();
        this.copyLeadOrigin = Object.assign({}, this.leadOrigin);
        this.isNew = false;
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  cancel() {
    this.resetAllChangedStatus();
    this.leadOrigin = Object.assign({}, this.copyLeadOrigin);
  }

  back() {
        this.router.navigateByUrl('/lead-origin');
  }

  delete() {
    this._leadOriginService.deleteLeadOrigin(this.leadOrigin.Id)
      .then((response) => {
        console.log('Deleted successfully: ', response);
        this.back();
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  private setLeadOriginDefault() {
    if (this.leadOrigin.IsEnabled === undefined) {
      this.leadOrigin.IsEnabled = true;
    }
  }

  private loadLeadOrigin(leadOriginId) {
    this._leadOriginService.getLeadOrigin(leadOriginId)
      .then((leadOrigin) => {
        this.leadOrigin = leadOrigin;
        this.copyLeadOrigin = Object.assign({}, leadOrigin);
        console.log(this.leadOrigin);
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

    if (this.leadOrigin.DateCreated === undefined) {
      this.leadOrigin.DateCreated = moment().utc();
    }

    if (this.leadOrigin.DateModified === undefined) {
      this.leadOrigin.DateModified = moment().utc();
    }
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
