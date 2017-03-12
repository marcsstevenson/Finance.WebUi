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
    { prop: 'LastDealNumber', name: 'Last Deal' },
    { prop: 'FirstName', name: 'First Name' },
    { prop: 'LastName', name: 'Last Name' },
    { prop: 'MobileNumber', name: 'Mobile' },
    { prop: 'DriversLicenceNumber', name: 'Drivers Licence' },
  ];

  constructor(
    private router: Router,
    private _customerService: CustomerService) { }

    ngOnInit() {
    this.search();
  }

  addCustomer() {
    this.router.navigate(['/customer', 'new']);
  }

  onSelect(event) {
    this.router.navigate(['/customer', event.selected[0].Id]);
  }

//    this._customerService.getCustomers()

  public onSort(event) {
    let sort = event.sorts[0];
    let dir = sort.dir;
    let sortedBy = sort.prop;

    //Update our sort properties
    this.currentlyOrderBy = sortedBy;
    this.sortAsc = dir === SORT_ASC;

    this.search();
  }

  public onPage(pageOptions) {
    //Update the offset
    this.offset = pageOptions.offset;

    this.search();
  }

  public search() {
    //Build a search request for our current values
    let searchObj = {
      SearchTerm: this.searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      CurrentPage: this.offset + 1, //the API starts paging at 1 rather than 0
      PageSize: this.pageSize
    };

    this._customerService.searchCustomer(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  private populateCurrentTablePage(data) {
    let start = this.offset * this.pageSize;
    let end = start + data.SearchResults.length;
    this.count = data.TotalResultCount;
    this.rows = this.createEmtpyArray(data.SearchResults.length);

    // update the current page record
    for (let i = start; i < end; i++) {
      this.rows[i] = data.SearchResults[i - start];
    }
  }

  private createEmtpyArray(length) {
    let array = [];

    for (let i = 0; i < length; i++) {
      array.push({});
    }

    return array;
  }
}