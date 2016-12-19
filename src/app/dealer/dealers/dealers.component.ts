import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// import {   TableOptions,   SelectionType,   TableColumn,   ColumnMode } from
// 'angular2-data-table';

import {DealershipData} from '../mockup-data';
import {DealerService} from '../dealer.service';

const SORT_ASC = 'asc';

@Component({
  //moduleId: module.id,
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.scss'],
  providers: [DealerService]
})
export class DealersComponent implements OnInit {

  public rows : Array < any > = [];
  public selections = [];
  public searchQuery : string;
  public selected = {};

  private pageSize = 5;
  private offset = 0;
  private count = 0;
  private limit = 10;
  private loadNumOfPages = 3;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;
  private currentlyOrderBy = 'Name';
  private sortAsc = true;

  public columns = [
    {
      prop: 'Name',
      name: 'Dealer Name',
      comparator: this
        .sorter
        .bind(this)
    }, 
    {
      prop: 'ContactName',
      name: 'Contact Name',
      comparator: this
        .sorter
        .bind(this)
    }, {
      prop: 'CellNumber',
      name: 'Cell Number',
      comparator: this
        .sorter
        .bind(this)
    }, {
      prop: 'PhoneNumber',
      name: 'Phone Number',
      comparator: this
        .sorter
        .bind(this)
    }, {
      prop: 'Email',
      name: 'Date Created',
      comparator: this
        .sorter
        .bind(this)
    }
  ];
  // public options = new TableOptions({   columnMode: ColumnMode.force,
  // headerHeight: 42,   footerHeight: 50,   limit: this.pageSize,   rowHeight:
  // 'auto',   selectionType: SelectionType.multi,   columns: [     new
  // TableColumn({ prop: 'Name', name: 'Dealer Name', comparator:
  // this.sorter.bind(this) }),     new TableColumn({ prop: 'ContactName', name:
  // 'Contact Name', comparator: this.sorter.bind(this) }),     new TableColumn({
  // prop: 'CellNumber', name: 'Cell Number', comparator: this.sorter.bind(this)
  // }),     new TableColumn({ prop: 'PhoneNumber', name: 'Phone Number' ,
  // comparator: this.sorter.bind(this) }),     new TableColumn({ prop: 'Email',
  // name: 'Email' , comparator: this.sorter.bind(this) })   ] });

  private data : Array < any > = DealershipData;

  public constructor(private router: Router, private _dealershipService: DealerService) {
    // this.length = this.data.length;
  }

  public ngOnInit() : void {
    // this.onChangeTable(this.config); this.rows = this.data;

    // todo: uncomment the code below and change the base api url contant in the
    // file, the api integration should just work this.loadDealership();
    this.loadDealsBySearch();
  }

  public addDealership() {
    this
      .router
      .navigate(['/dealership', 'new']);
  }

  public sorter(event) {
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

    this
      .searchDealershipByOjb(searchObj)
      .then((response) => {
        this.populateCurrentTablePage(response);
      });
  }

  public searchDealer(searchQuery : string) {
    let searchObj = {
      SearchTerm: searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchDealershipByOjb(searchObj);
  }

  public onSelect(event) {
    this
      .router
      .navigate(['/dealership', event.selected[0].Id]);
  }

  public onPageChange(pageOptions) {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      CurrentPage: pageOptions.offset + 1,
      PageSize: this.pageSize
    };

    this
      .searchDealershipByOjb(searchObj)
      .then((response) => {
        this.populateCurrentTablePage(response);
      });
  }

  private loadDealsBySearch() {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      PageSize: this.numOfReturnedResult
    };

    this
      .searchDealershipByOjb(searchObj)
      .then((response) => {
        // this.rows = response.SearchResults;
        if (response) {
          // this.count = response.TotalResultCount;
          this.count = 2;
          this.rows = this.createEmtpyArray(response.SearchResults.length, {});
          this.populateCurrentTablePage(response);
        }
      });
  }

  private searchDealershipByOjb(searchObj) {
    console.log("The searchObj is: ", searchObj);

    return this
      ._dealershipService
      .searchDealership(searchObj)
      .then((response) => {
        console.log("The response is: ", response);
        return response;
      })
      .catch((err) => {
        //todo: show err message to users later
        console.log(err);
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

  private createEmtpyArray(length, obj) {
    let array = [];

    for (let i = 0; i < length; i++) {
      array.push({});
    }

    return array;
  }

  private loadDealership() {
    this
      ._dealershipService
      .getDealerships()
      .then((dealers) => {
        this.rows = dealers;
        console.log(this.rows);
      })
      .catch((err) => {
        //todo: show err message to users later
        console.log(err);
      });
  }

}
