import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import {
//   TableOptions,
//   SelectionType,
//   TableColumn,
//   ColumnMode
// } from 'angular2-data-table';

import { FinanceCompanyService } from '../finance-company.service';
import { FormControl } from "@angular/forms";

const SORT_ASC = 'asc';

@Component({
  //moduleId: module.id,
  selector: 'app-finance-companies',
  templateUrl: './finance-companies.component.html',
  styleUrls: ['./finance-companies.component.scss'],
  providers: [ FinanceCompanyService ]
})

export class FinanceCompaniesComponent implements OnInit {

  public working: boolean = true;
  public rows: Array<any> = [];
  public selections = [];
  public searchTerm = new FormControl();

  private pageSize = 100;
  private offset = 0;
  private count = 0;
  private limit = 100;
  private loadNumOfPages = 2;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;
  private currentlyOrderBy = 'Name';
  private sortAsc = true;


  private columns = [
      { prop: 'Name', name: 'Finance Company Name' },
      { prop: 'DateCreated', name: 'Date Created' },
      { prop: 'DateModified', name: 'Date Modified' },
  ];
  // public options = new TableOptions({
  //   columnMode: ColumnMode.force,
  //   headerHeight: 42,
  //   footerHeight: 50,
  //   limit: this.pageSize,
  //   rowHeight: 'auto',
  //   selectionType: SelectionType.multi,
  //   columns: [
  //     new TableColumn({ prop: 'Name', name: 'Finance Company Name', comparator: this.sorter.bind(this) }),
  //     new TableColumn({ prop: 'DateCreated', name: 'Date Created', comparator: this.sorter.bind(this) }),
  //     new TableColumn({ prop: 'DateModified', name: 'Date Modified' , comparator: this.sorter.bind(this) }),
  //   ]
  // });

  constructor(
    private router: Router,
    private _financeCompanyService: FinanceCompanyService
    ) {
  }

  ngOnInit() {
    this.searchTerm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(i => this.search());

    this.search();

    // using this function to get pagination details
    // this.loadFinanceCompanysBySearch();
  }

  addFinanceCompany () {
    this.router.navigate(['/finance-company', 'new']);
  }

  onSelect(event) {
    this.router.navigate(['/finance-company', event.selected[0].Id]);
  }

  public onSort(event) {
    if (!this.rows) return;

    let sort = event.sorts[0];
    let dir = sort.dir;
    let sortedBy = sort.prop;

    //Update our sort properties
    this.currentlyOrderBy = sortedBy;
    this.sortAsc = dir === SORT_ASC;

    this.search();
  }

  public onPage(pageOptions) {
    if (!this.rows) return;

    //Update the offset
    this.offset = pageOptions.offset;

    this.search();
  }

  public search() {
    this.working = true;

    //Build a search request for our current values
    let searchObj = {
      SearchTerm: this.searchTerm.value,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      CurrentPage: this.offset + 1, //the API starts paging at 1 rather than 0
      PageSize: this.pageSize
    };

    this._financeCompanyService.searchFinanceCompany(searchObj)
      .then((response) => {
        this.populateCurrentTablePage(response);
        this.working = false;
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
