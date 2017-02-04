import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DealService } from '../deal.service';
import { DealerService } from '../../dealer/index';
import { FinanceCompanyService } from '../../finance-company/index';
import { CustomerService } from '../../customer/index';
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
  private financeCompanies = [];
  private copyDeal: any = {};
  private note: string;
  private customerId: string;
  private customerName: string;
  private basicInfoChanged = false;
  private descriptionChanged = false;
  private financeChanged = false;
  private noteChanged = false;
  private currentDealId = '';

  //todo: add this to database
  private DealStatusSelections = [
    {
      Id: 0,
      Name: 'Settled /Paid'
    },
    {
      Id: 1,
      Name: 'Settled Awaiting Commission'
    },
    {
      Id: 2,
      Name: 'Pending Sign Up'
    },
    {
      Id: 3,
      Name: 'Pending Payout'
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _dealService: DealService,
    private _dealerService: DealerService,
    private _financeCompanyService: FinanceCompanyService,
    private _customerService: CustomerService
  ) { }

  ngOnInit() {

    // tinymce.init(
    //   {
    //     selector: "#test",
    //   });

    this.currentDealId = this.route.snapshot.params['id'];
    this.customerId = this.route.snapshot.params['customerId'];
    this.customerName = this.route.snapshot.params['customerName'];

    this.loadDealers();
    this.loadFinanceCompanies();

    if (this.currentDealId !== 'new' && this.currentDealId) {
      this.loadDeal(this.currentDealId)
          .then((deal) => {

            //todo: load customer Name with load deal api from backend
            this.loadCustomerName(deal.CustomerId);
            this.calculateIncome(null, false);

          });
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
        this.resetAllChangedStatus();
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

  calculateIncome(event, fieldName, changedByUi = true) {
    this.financeChanged = changedByUi;

    if (event) {
      this.updateFinanceField(event, fieldName);
    }

    this.deal.GrossIncome = parseInt(this.deal.Commission, 10) +
    parseInt(this.deal.DocumentationFee, 10) +
    parseInt(this.deal.GuaranteedAssetProtection, 10) +
    parseInt(this.deal.MechanicalBreakDownInsurance, 10) +
    parseInt(this.deal.PaymentProtectionInsurance, 10) +
    parseInt(this.deal.Insurance, 10) +
    parseInt(this.deal.Other, 10);

    this.calculateNetIncome(event, '', false);
  }

  calculateNetIncome(event, fieldName = '', update = true) {
    if (event && update && fieldName !== '') {
      this.updateFinanceField(event, fieldName);
    }

    this.deal.NetIncome = this.deal.GrossIncome - this.deal.DealershipCommission;
  }

  updateFinanceField (event, fieldName = '') {
    let numberValue = Number(event.currentTarget.value.replace(/[^0-9\.-]+/g, ''));

    this.deal[fieldName] = numberValue;
    event.currentTarget.value = new CurrencyPipe('NZ')
                                    .transform(numberValue, 'USD', true, '1.2-2') ;
    this.financeChanged = true;
  }

  clearPipe (event, value) {
    let stringValue = value + '';
    event.currentTarget.value = Number(stringValue.replace(/[^0-9\.-]+/g, ''));
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

    return this._dealService.getDeal(dealId)
      .then((deal) => {
        this.deal = deal;
        this.copyDeal = Object.assign({}, deal);
        console.log(this.deal);

        return deal;
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

  private loadFinanceCompanies() {
    this._financeCompanyService.getFinanceCompanies()
      .then((financeCompanies) => {
        this.financeCompanies = financeCompanies;
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

  private loadCustomerName(customerId) {
    return this._customerService.getCustomer(customerId)
      .then((customer) => {
        this.customerName = customer.FirstName + ' ' + customer.LastName;
        console.log('customerName:', this.customerName);
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
