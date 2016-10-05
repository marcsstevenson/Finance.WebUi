import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FinanceCompanyService } from '../finance-company.service';

import { GlobalVarables } from '../../global-variables';

import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-finance-company-detail',
  templateUrl: 'finance-company-detail.component.html',
  styleUrls: ['finance-company-detail.component.css'],
  providers: [FinanceCompanyService]
})
export class FinanceCompanyDetailComponent implements OnInit {

  public notes: Array<any>;

  private financeCompany: any = {};
  private copyFinanceCompany: any = {};
  private note: string;
  private basicInfoChanged = false;
  private noteChanged = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _financeCompanyService: FinanceCompanyService
  ) { }

  ngOnInit() {
    let financeCompanyId = this.route.snapshot.params['id'];

    if (financeCompanyId !== 'new') {
      this.loadCustomer(financeCompanyId);
      this.loadNotes(financeCompanyId);
    }
  }

  save() {
    this.setDefaulCustomerDates();

    this._financeCompanyService.addOrSaveFinanceCompany(this.financeCompany)
      .then((response) => {
        console.log('Saved successfully: ', response);
        this.router.navigate(['/finance-company', response.CommittedId]);
        this.financeCompany.Id = response.CommittedId;
        this.resetAllChangedStatus();
        this.copyFinanceCompany = Object.assign({}, this.financeCompany);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  cancel() {
    this.resetAllChangedStatus();
    this.financeCompany = Object.assign({}, this.copyFinanceCompany);
  }

  delete() {
    this._financeCompanyService.deleteFinanceCompany(this.financeCompany.Id)
      .then((response) => {
        console.log('Deleted successfully: ', response);
        this.router.navigateByUrl('/finance-company');
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  addNote(note: string) {
    let noteObj = {
      Note: note,
      CustomerId: this.financeCompany.Id,
      EnteredBy: 'You', //todo: need to get this user name
      DateCreated: new Date(),
      DateModified: new Date()
    };

    this._financeCompanyService.addOrSaveFinanceCompanyNote(noteObj)
      .then((response) => {
        console.log('Saved successfully: ', response);
        this.note = '';
        this.notes.push(noteObj);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  saveNote(noteObj: any) {
    noteObj.DateModified = new Date();

    this._financeCompanyService.addOrSaveFinanceCompanyNote(noteObj)
      .then((response) => {
        this.resetAllChangedStatus();
        console.log('Saved successfully: ', response);
        this.clearNote();
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  deleteNote(noteId: string) {
    this._financeCompanyService.deleteFinanceCompanyNote(noteId)
      .then((response) => {
        console.log('Deleted successfully: ', response);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  clearNote() {
    this.noteChanged = false;
    this.note = '';
  }

  private loadCustomer(financeCompanyId) {
    this._financeCompanyService.getFinanceCompany(financeCompanyId)
      .then((financeCompany) => {
        this.financeCompany = financeCompany;
        this.copyFinanceCompany = Object.assign({}, financeCompany);
        console.log(this.financeCompany);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  private setDefaulCustomerDates() {
    if (this.financeCompany.DateCreated === undefined) {
      this.financeCompany.DateCreated = moment().utc();
    }

    if (this.financeCompany.DateModified === undefined) {
      this.financeCompany.DateModified = moment().utc();
    }
  }

  private loadNotes(financeCompanyId) {
    this._financeCompanyService.getFinanceCompanyNotes(financeCompanyId)
      .then((notes) => {
        this.notes = notes;
        console.log('The notes:', notes);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  private resetAllChangedStatus() {
    this.basicInfoChanged = false;
  }

}
