import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {
  TableOptions,
  SelectionType,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';

import { DealershipData } from '../mockup-data';
import { DealerService } from '../dealer.service';

const SORT_ASC = 'asc';

@Component({
  moduleId: module.id,
  selector: 'app-dealers',
  templateUrl: 'dealers.component.html',
  styleUrls: ['dealers.component.css'],
  providers: [DealerService]
})
export class DealersComponent implements OnInit {

  public rows: Array<any> = [];
  public selections = [];
  public searchQuery: string;

  private pageSize = 5;
  private loadNumOfPages = 3;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;
  private currentlyOrderBy = 'Name';
  private sortAsc = true;

  public options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 42,
    footerHeight: 50,
    limit: this.pageSize,
    rowHeight: 'auto',
    selectionType: SelectionType.multi,
    columns: [
      new TableColumn({ prop: 'Name', name: 'Dealer Name', comparator: this.sorter.bind(this) }),
      new TableColumn({ prop: 'ContactName', name: 'Contact Name', comparator: this.sorter.bind(this) }),
      new TableColumn({ prop: 'CellNumber', name: 'Cell Number', comparator: this.sorter.bind(this) }),
      new TableColumn({ prop: 'PhoneNumber', name: 'Phone Number' , comparator: this.sorter.bind(this) }),
      new TableColumn({ prop: 'Email', name: 'Email' , comparator: this.sorter.bind(this) })

    ]
  });


  private data: Array<any> = DealershipData;

  public constructor(
    private router: Router,
    private _dealershipService: DealerService
  ) {
    // this.length = this.data.length;
  }

  public ngOnInit(): void {
    // this.onChangeTable(this.config);

    // this.rows = this.data;

    //todo: uncomment the code below and change the base api url contant in the file,
    // the api integration should just work
    // this.loadDealership();
    this.loadDealsBySearch();
  }

  public addDealership() {
    this.router.navigate(['/dealership', 'new']);
  }

  public sorter (rows, dirs, sortedBy?) {
    console.log('sorting server side: ', rows, dirs);

    this.currentlyOrderBy = sortedBy || dirs[0].prop;
    this.sortAsc = dirs[0].dir === SORT_ASC;

    let searchObj = {
      SearchTerm: this.searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchDealerByOjb(searchObj).then((response) => {
      this.populateCurrentTablePage(response);
    });
  }

  public searchDealer (searchQuery: string) {
    let searchObj = {
      SearchTerm: searchQuery,
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      PageSize: this.numOfReturnedResult
    };

    this.searchDealerByOjb(searchObj);
  }

  public onSelectionChange(selected) {
    this.router.navigate(['/dealership', selected[0].Id]);
  }

  private loadDealsBySearch () {
    let searchObj = {
      SearchTerm: '',
      OrderBy: this.currentlyOrderBy,
      PageSize: this.numOfReturnedResult
    };

    this.searchDealerByOjb(searchObj).then((response) => {
      // this.rows = response.SearchResults;
      this.options.count = response.TotalResultCount;
      this.rows = this.createEmtpyArray(this.options.count, {});
      this.populateCurrentTablePage(response);
    });
  }

  private searchDealerByOjb (searchObj) {
    console.log("The searchObj is: ", searchObj);

    return this._dealershipService.searchDealership(searchObj)
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
      let start = this.options.offset * this.options.limit;
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

  private loadDealership() {
    this._dealershipService.getDealerships()
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
