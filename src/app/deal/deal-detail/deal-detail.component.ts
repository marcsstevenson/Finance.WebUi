import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DealService } from '../deal.service';
import { DealerService } from '../../dealer/index';
// import { TinyEditor } from '../../shared/directives/tiny-editor/tiny-editor.directive';

import { DealsData } from '../mockup-data';
import * as moment from 'moment';

declare var tinymce: any;

@Component({
  //moduleId: module.id,
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.scss'],
  providers: [DealService]
})
export class DealDetailComponent implements OnInit {

  public notes: Array<any>;

  private deal: any = {};
  private dealers = [];
  private copyDeal: any = {};
  private note: string;
  private customerId: string;
  private basicInfoChanged = false;
  private descriptionChanged = false;
  private financeChanged = false;
  private noteChanged = false;
  private currentDealId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dealService: DealService,
    private _dealerService: DealerService
  ) { }

  ngOnInit() {

    // tinymce.init(
    //   {
    //     selector: "#test",
    //   });

    this.currentDealId = this.route.snapshot.params['id'];
    this.customerId = this.route.snapshot.params['customerId'];

    if (this.currentDealId !== 'new') {
      this.loadDeal(this.currentDealId);
      this.loadNotes(this.currentDealId);
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

        this.copyDeal = Object.assign({}, this.deal);
        // this.router.navigateByUrl('/deal');
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  cancel() {
    this.resetAllChangedStatus();
    this.deal = Object.assign({}, this.copyDeal);
    this.deal.CustomerId = this.customerId;
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

  addNote(note: string) {
    let noteObj = {
      Note: note,
      DealId: this.deal.Id,
      EnteredBy: 'You', //todo: need to get this user name
      DateCreated: new Date(),
      DateModified: new Date()
    };

    this._dealService.addOrSaveDealNote(noteObj)
      .then((response) => {
        console.log('Saved successfully: ', response);
        this.note = '';
        this.notes.push(noteObj);
        this.clearNote();
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  saveNote(noteObj: any) {
    noteObj.DateModified = new Date();

    this._dealService.addOrSaveDealNote(noteObj)
      .then((response) => {
        this.resetAllChangedStatus();
        console.log('Saved successfully: ', response);
        this.clearNote();
        this.loadNotes(this.currentDealId);

      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  clearNote() {
    this.noteChanged = false;
    this.note = '';
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
        this.copyDeal = Object.assign({}, deal);
        console.log(this.deal);
      })
      .catch((err) => {
        console.log(err); // dont do this, show the user a nice message
      });
  }

  private loadDealers() {
    this._dealerService.getDealerships()
      .then((dealers) => {
        this.dealers = dealers;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private loadNotes(dealId) {
    this._dealService.getDealNotes(dealId)
      .then((notes) => {
        this.notes = notes;
        console.log('The notes:', notes);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  private resetAllChangedStatus () {
    this.basicInfoChanged = false;
    this.descriptionChanged = false;
    this.financeChanged = false;
  }

}
