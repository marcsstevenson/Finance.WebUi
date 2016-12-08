import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import {
//   TableOptions,
//   SelectionType,
//   TableColumn,
//   ColumnMode
// } from 'angular2-data-table';

import { DealService } from '../deal.service';

const SORT_ASC = 'asc';

@Component({
  //moduleId: module.id,
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  providers: [DealService]
})
export class DealsComponent implements OnInit {

  public rows: Array<any> = [];
  public selections = [];
  public searchQuery: string;

  private pageSize = 5;
  private offset = 0;
  private count = 0;
  private limit = 10;
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
  //   columns: [
  //     new TableColumn({ prop: 'Number', name: 'Deal Number', comparator: this.sorter.bind(this) }),
  //     new TableColumn({ prop: 'DealStatus', name: 'Deal Status', comparator: this.sorter.bind(this) }),
  //     new TableColumn({ prop: 'CustomerName', name: 'Customer Name', comparator: this.sorter.bind(this) }),
  //     new TableColumn({ prop: 'DateCreated', name: 'Date Created' , comparator: this.sorter.bind(this) })
  //   ]
  // });


  constructor(
    private router: Router,
    private _dealService: DealService) { }

  ngOnInit() {
    //todo: after implementing search api call for deals, call loadDealsBySearch

    // this._dealService.getDeals()
    // .then((deals) => {
    //   this.rows = deals;
    //   console.log(this.rows);
    // })
    // .catch((err) => {
    //   //todo: show err message to users later
    //   console.log(err);
    // });

    this.loadDealsBySearch();
  }

  public addDeal () {
    this.router.navigate(['/deal', 'new']);
  }

  public onSort (rows, dirs, sortedBy?) {
    console.log('sorting server side: ', rows, dirs);

    this.currentlyOrderBy = sortedBy || dirs[0].prop;
    this.sortAsc = dirs[0].dir === SORT_ASC;

    let searchObj = {
      SearchTerm: this.searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchDealByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  public searchDeal (searchQuery: string) {
    let searchObj = {
      SearchTerm: searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchDealByOjb(searchObj);
  }

  public onSelect(selected) {
    this.router.navigate(['/deal', selected[0].Id]);
  }

  public onPage(pageOptions) {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      CurrentPage: pageOptions.offset + 1,
      PageSize: this.pageSize
    };

    this.searchDealByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  private loadDealsBySearch () {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      PageSize: this.numOfReturnedResult
    };

    this.searchDealByOjb(searchObj).then((response) => {
      // this.rows = response.SearchResults;
      this.count = response.TotalResultCount;
      this.rows = this.createEmtpyArray(this.count, {});
      this.populateCurrentTablePage(response);
    });
  }

  private searchDealByOjb (searchObj) {
    console.log("The searchObj is: ", searchObj);

    return this._dealService.searchDeal(searchObj)
    .then((response) => {
      console.log("The response is: ", response);
      return response;
    })
    .catch((err) => {
      //todo: show err message to users later
      console.log(err);
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

  private createEmtpyArray (length, obj) {
    let array = [];

    for (let i = 0; i < length; i++) {
      array.push({});
    }

    return array;
  }
}
