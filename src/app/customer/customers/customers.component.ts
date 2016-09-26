import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  TableOptions,
  SelectionType,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';


import { CustomersData } from '../mockup-data';
import { CustomerService } from '../customer.service';

@Component({
  moduleId: module.id,
  selector: 'fwui-customers',
  templateUrl: 'customers.component.html',
  styleUrls: ['customers.component.css'],
  providers: [ CustomerService ]
})
export class CustomersComponent implements OnInit {

  public rows: Array<any> = [];
  public selections = [];
  public searchQuery: string;

  private pageSize = 5;
  private loadNumOfPages = 3;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;

  public options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 42,
    footerHeight: 50,
    limit: this.pageSize,
    rowHeight: 'auto',
    selectionType: SelectionType.multi,
    columns: [
      new TableColumn({ prop: 'Number', name: 'Customer Number' }),
      new TableColumn({ prop: 'FirstName', name: 'First Name' }),
      new TableColumn({ prop: 'LastName', name: 'Last Name' }),
      new TableColumn({ prop: 'CellNumber', name: 'Cell Number' }),
      new TableColumn({ prop: 'DriversLicenceNumber', name: 'Drivers Licence' }),
    ]
  });

  private data: Array<any> = CustomersData;

  constructor(
    private router: Router,
    private _customerService: CustomerService
    ) {
  }

  ngOnInit() {
    // this.loadCustomers();
    //using this function to get pagination details
    this.loadCustomersBySearch();
  }

  addCustomer () {
    this.router.navigate(['/customer', 'new']);
  }

  sorter (sortedBy) {
    console.log(sortedBy);
  }

  searchCustomer (searchQuery: string) {
    let searchObj = {
      SearchTerm: searchQuery,
      OrderBy: 'Name',
      PageSize: this.numOfReturnedResult
    };

    this.searchCustomerByOjb(searchObj);
  }

  onSelectionChange(selected) {
    this.router.navigate(['/customer', selected[0].Id]);
  }

  onPageChange(pageOptions) {
    let searchObj = {
      SearchTerm: '',
      OrderBy: 'Name',
      CurrentPage: pageOptions.offset + 1,
      PageSize: this.pageSize
    };

    this.searchCustomerByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  private loadCustomersBySearch () {
    let searchObj = {
      SearchTerm: '',
      OrderBy: 'Name',
      PageSize: this.numOfReturnedResult
    };

    this.searchCustomerByOjb(searchObj).then((response) => {
      // this.rows = response.SearchResults;
      this.options.count = response.TotalResultCount;
      this.rows = this.createEmtpyArray(this.options.count, {});
      this.populateCurrentTablePage(response);
    });
  }

  private populateCurrentTablePage (data) {
      let start = this.options.offset * this.options.limit;
      let end = start + data.SearchResults.length;

      // update the current page record
      for (let i = start; i < end; i++) {
        this.rows[i] = data.SearchResults[i - start];
      }
  }


  private searchCustomerByOjb (searchObj) {
    console.log("The searchObj is: ", searchObj);

    return this._customerService.searchCustomer(searchObj)
    .then((response) => {
      console.log("The response is: ", response);
      return response;
    })
    .catch((err) => {
      //todo: show err message to users later
      console.log(err);
    });
  }

  private loadCustomers () {
    this._customerService.getCustomers()
    .then((customers) => {
      this.rows = customers;
      console.log(this.rows);
    })
    .catch((err) => {
      //todo: show err message to users later
      console.log(err);
    });
  }

  private createEmtpyArray (length, obj) {
    let array = [];

    for (let i = 0; i < length; i++) {
      array.push({});
    }

    return array;
  }
}
