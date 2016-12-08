import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import {
//   TableOptions,
//   SelectionType,
//   TableColumn,
//   ColumnMode
// } from 'angular2-data-table';

import { FinanceCompanyService } from '../finance-company.service';

const SORT_ASC = 'asc';

@Component({
  //moduleId: module.id,
  selector: 'app-finance-companies',
  templateUrl: './finance-companies.component.html',
  styleUrls: ['./finance-companies.component.scss'],
  providers: [ FinanceCompanyService ]
})

export class FinanceCompaniesComponent implements OnInit {

  public rows: Array<any> = [];
  public selections = [];
  public searchQuery: string;

  private pageSize = 5;
  private offset = 0;
  private count = 0;
  private limit = 10;
  private loadNumOfPages = 3;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;
  private currentlyOrderBy = 'Name';
  private sortAsc = true;

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

    this.loadFinanceCompanies();

    // using this function to get pagination details
    // this.loadFinanceCompanysBySearch();
  }

  addFinanceCompany () {
    this.router.navigate(['/finance-company', 'new']);
  }

  sorter (rows, dirs, sortedBy?) {
    console.log('sorting server side: ', rows, dirs);

    this.currentlyOrderBy = sortedBy || dirs[0].prop;
    this.sortAsc = dirs[0].dir === SORT_ASC;

    let searchObj = {
      SearchTerm: this.searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchFinanceCompanyByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  searchFinanceCompany (searchQuery: string) {
    let searchObj = {
      SearchTerm: searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchFinanceCompanyByOjb(searchObj);
  }

  onSelectionChange(selected) {
    this.router.navigate(['/finance-company', selected[0].Id]);
  }

  onPageChange(pageOptions) {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      CurrentPage: pageOptions.offset + 1,
      PageSize: this.pageSize
    };

    this.searchFinanceCompanyByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  private loadFinanceCompanysBySearch () {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      PageSize: this.numOfReturnedResult
    };

    this.searchFinanceCompanyByOjb(searchObj).then((response) => {
      this.count = response.TotalResultCount;
      this.rows = this.createEmtpyArray(this.count, {});
      this.populateCurrentTablePage(response);
    });
  }

  private populateCurrentTablePage (data) {
      let start = this.offset * this.limit;
      let end = start + data.SearchResults.length;

      // update the current page record
      for (let i = start; i < end; i++) {
        this.rows[i] = data.SearchResults[i - start];
      }
  }


  private searchFinanceCompanyByOjb (searchObj) {
    console.log("The searchObj is: ", searchObj);

    return this._financeCompanyService.searchFinanceCompany(searchObj)
    .then((response) => {
      console.log("The response is: ", response);
      return response;
    })
    .catch((err) => {
      //todo: show err message to users later
      console.log(err);
    });
  }

  private loadFinanceCompanies () {
    this._financeCompanyService.getFinanceCompanies()
    .then((financeCompanies) => {
      this.rows = financeCompanies;
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
