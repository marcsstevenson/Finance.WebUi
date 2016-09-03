import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Response } from '@angular/http';

import { CustomerService } from '../customer.service';
// import { TinyEditor } from '../../shared/directives/tiny-editor/tiny-editor.directive';
// import { TinyMceValueAccessorDirective } from '../../shared/directives/tinymce.directive';

import { CustomerDealsComponent } from './customer-deals/customer-deals.component';

import { CustomersData } from '../mockup-data';
declare var tinymce: any;

@Component({
  moduleId: module.id,
  selector: 'app-customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css'],
  directives: [CustomerDealsComponent, /*TinyMceValueAccessorDirective*/],
  providers: [CustomerService]
})
export class CustomerDetailComponent implements OnInit {
  public notes: Array<any>;
  public deals: Array<any>;

  private customer: any = {};
  private note: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _customerService: CustomerService
  ) { }

  ngOnInit() {
    tinymce.init({
      selector: '[tinymce]'
    });

    let customerId = this.route.snapshot.params['id'];

    this.loadCustomer(customerId);
    this.loadNotes(customerId);

    // this.notes = [
    //   {
    //     EnteredBy: 'Tim',
    //     DateCreated: new Date(),
    //     DateModified:  new Date(),
    //     Note: '<h3>Tim Content</h3>\n more text a;alsdkfjal;sdfjasl;dfj  \n a;sldfjasl;kfj'
    //   },
    //   {
    //     EnteredBy: 'Marc',
    //     DateCreated: new Date(),
    //     DateModified:  new Date(),
    //     Note: '<h3>Marc Content</h3>'
    //   }
    // ];

    this.deals = [
      {
        secureDescription: '02 Audi A3',
        status: 'Settled /Paid',
        netIncome: '1,226.73'
      },
      {
        secureDescription: '15 Dorado',
        status: 'Settled Awaiting Commission',
        netIncome: '375.55'
      }
    ];
  }

  save() {
    this._customerService.addOrSaveCustomer(this.customer)
    .then((response) => {
      console.log('Saved successfully: ', response);
      // this.router.navigateByUrl('/customer');
    })
    .catch((err) => {
      console.log(err); //todo: show the user a nice message
    });
  }

  delete() {
    this._customerService.deleteCustomer(this.customer.Id)
    .then((response) => {
      console.log('Deleted successfully: ', response);
      this.router.navigateByUrl('/customer');
    })
    .catch((err) => {
      console.log(err); //todo: show the user a nice message
    });
  }

  addNote(note: string) {
    let noteObj = {
      Note: note,
      CustomerId: this.customer.Id,
      EnteredBy: 'Tim', //todo: need to get this user name
      DateCreated: new Date(),
      DateModified: new Date()
    };

    this._customerService.addOrSaveCustomerNote(noteObj)
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

    this._customerService.addOrSaveCustomerNote(noteObj)
    .then((response) => {
      console.log('Saved successfully: ', response);
    })
    .catch((err) => {
      console.log(err); //todo: show the user a nice message
    });
  }

  deleteNote(noteId: string) {
    this._customerService.deleteCustomerNote(noteId)
    .then((response) => {
      console.log('Deleted successfully: ', response);
    })
    .catch((err) => {
      console.log(err); //todo: show the user a nice message
    });
  }

  private loadCustomer (customerId) {
    this._customerService.getCustomer(customerId)
    .then((customer) => {
      this.customer = customer;
      console.log(this.customer);
    })
    .catch((err) => {
      console.log(err); //todo: show the user a nice message
    });
  }

  private loadNotes (customerId) {
    this._customerService.getCustomerNotes(customerId)
    .then((notes) => {
      this.notes = notes;
      console.log('The notes:', notes);
    })
    .catch((err) => {
      console.log(err); //todo: show the user a nice message
    });
  }

}
