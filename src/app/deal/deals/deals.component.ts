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

  private pageSize = 100;
  private offset = 0;
  private count = 0;
  private loadNumOfPages = 3;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;
  private currentlyOrderBy = 'Number';
  private sortAsc = true;


  private columns = [
    { prop: 'Number', name: 'Deal Number' },
    { prop: 'DealStatusDescription', name: 'Deal Status' },
    { prop: 'CustomerName', name: 'Customer Name' },
    { prop: 'DateCreated', name: 'Date Created' },
  ];

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
    this.search();
  }

  public addDeal() {
    this.router.navigate(['/deal', 'new']);
  }

  public onSelect(event) {
    this.router.navigate(['/deal', event.selected[0].Id]);
  }

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

    this._dealService.searchDeal(searchObj).then((response) => {
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
