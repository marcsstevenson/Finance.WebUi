import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import {
//   TableOptions,
//   SelectionType,
//   TableColumn,
//   ColumnMode
// } from 'angular2-data-table';


import { CustomersData } from '../mockup-data';
import { CustomerService } from '../customer.service';

const SORT_ASC = 'asc';

@Component({
  //moduleId: module.id,
  selector: 'fwui-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  public rows: Array<any> = [];
  public selections = [];
  public searchQuery: string;
  public selected = {};

  private pageSize = 100;
  private offset = 0;
  private count = 0;
  private limit = 100;
  private loadNumOfPages = 3;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;
  private currentlyOrderBy = 'Number';
  private sortAsc = true;



  // public options = new TableOptions({
  //   columnMode: ColumnMode.force,
  //   headerHeight: 42,
  //   footerHeight: 50,
  //   limit: this.pageSize,
  //   rowHeight: 'auto',
  //   selectionType: SelectionType.multi,

  // });

  public columns = [
    { prop: 'Number', name: 'Customer Number' },
    { prop: 'FirstName', name: 'First Name' },
    { prop: 'LastName', name: 'Last Name' },
    { prop: 'MobileNumber', name: 'Mobile' },
    { prop: 'DriversLicenceNumber', name: 'Drivers Licence' },
  ];

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

  addCustomer() {
    this.router.navigate(['/customer', 'new']);
  }

  onSort(event) {
    let sort = event.sorts[0];
    let dir = sort.dir;
    let sortedBy = sort.prop;
    // console.log('sorting server side: ', rows, dirs);

    this.currentlyOrderBy = sortedBy;
    this.sortAsc = dir === SORT_ASC;

    let searchObj = {
      SearchTerm: this.searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchCustomerByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  // sortedByName (rows, dirs) {
  //   this.sorter(rows, dirs, 'Name');
  // }

  // sorterByCell (rows, dirs) {
  //   this.sorter(rows, dirs, 'Cell');
  // }

  searchCustomer(searchQuery: string) {
    let searchObj = {
      SearchTerm: searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchCustomerByOjb(searchObj);
  }

  onSelect(event) {
    this.router.navigate(['/customer', event.selected[0].Id]);
  }

  // onSelect(event) {
  //   console.log('Event: select', event, this.selected);
  // }

  // onActivate(event) {
  //   console.log('Event: activate', event);
  // }

  onPage(pageOptions) {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      CurrentPage: pageOptions.offset + 1,
      PageSize: this.pageSize
    };

    this.searchCustomerByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  private loadCustomersBySearch() {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      PageSize: this.numOfReturnedResult
    };

    this.searchCustomerByOjb(searchObj).then((response) => {
      // this.rows = response.SearchResults;
      if (response) {
        this.count = response.TotalResultCount;
        // this.count = 0;
        this.rows = this.createEmtpyArray(response.SearchResults.length, {});
        this.populateCurrentTablePage(response);
      }
    });
  }

  private populateCurrentTablePage(data) {
    let start = this.offset * this.limit;
    let end = start + data.SearchResults.length;

    // update the current page record
    for (let i = start; i < end; i++) {
      this.rows[i] = data.SearchResults[i - start];
    }
  }


  private searchCustomerByOjb(searchObj) {
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

  private loadCustomers() {
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

  private createEmtpyArray(length, obj) {
    let array = [];

    for (let i = 0; i < length; i++) {
      array.push({});
    }

    return array;
  }
}
