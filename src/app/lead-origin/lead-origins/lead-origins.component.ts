import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// import {   TableOptions,   SelectionType,   TableColumn,   ColumnMode } from
// 'angular2-data-table';

import {LeadOriginData} from '../mockup-data';
import {LeadOriginService} from '../lead-origin.service';

const SORT_ASC = 'asc';

@Component({
  //moduleId: module.id,
  selector: 'app-dealers',
  templateUrl: './lead-origins.component.html',
  styleUrls: ['./lead-origins.component.scss'],
  providers: [LeadOriginService]
})
export class LeadOriginsComponent implements OnInit {

  public rows : Array < any > = [];
  public selections = [];
  public searchQuery : string;
  public selected = {};

  private pageSize = 100;
  private offset = 0;
  private count = 0;
  private limit = 100;
  private loadNumOfPages = 3;
  private numOfReturnedResult = this.pageSize * this.loadNumOfPages;
  private currentlyOrderBy = 'Name';
  private sortAsc = true;

  public columns = [
    { prop: 'Name', name: 'Name' },
    { prop: 'IsDefault', name: 'Default' }
  ];

  private data : Array < any > = LeadOriginData;

  public constructor(private router: Router, private _leadOriginService: LeadOriginService) {
    // this.length = this.data.length;
  }

  public ngOnInit() : void {
    // this.onChangeTable(this.config); this.rows = this.data;

    // todo: uncomment the code below and change the base api url contant in the
    // file, the api integration should just work this.loadLeadOrigin();
    this.search();
  }

  public add() {
    this
      .router
      .navigate(['/lead-origin', 'new']);
  }

  public onSelect(event) {
    this
      .router
      .navigate(['/lead-origin', event.selected[0].Id]);
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

    this._leadOriginService.searchLeadOrigin(searchObj).then((response) => {
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
