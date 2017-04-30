import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { PersonalApplicationService } from "app/application/personal-application.service";
import { PersonalApplicationStatusOption } from "app/application/PersonalApplicationStatusOption";

const SORT_ASC = 'asc';

@Component({
  //moduleId: module.id,
  selector: 'fwui-PersonalApplications',
  templateUrl: './personal-applications.component.html',
  styleUrls: ['./personal-applications.component.scss'],
  providers: [PersonalApplicationService]
})
export class PersonalApplicationsComponent implements OnInit {
  public working: boolean = true;
  public rows: Array<any> = [];
  public selections = [];

  public selected = {};
  public searchTerm = new FormControl();
  private personalApplicationStatusOptionValue: number = null;
  private personalApplicationStatusOptions: Array<PersonalApplicationStatusOption>;

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
    // { prop: 'Number', name: 'Customer Number' },
    { prop: 'Number', name: 'Number' },
    { prop: 'StatusDescription', name: 'Status' },
    { prop: 'FirstName', name: 'First Name' },
    { prop: 'LastName', name: 'Last Name' },
    // { prop: 'MobileNumber', name: 'Mobile' },
    // { prop: 'DriversLicenceNumber', name: 'Drivers Licence' },
  ];

  constructor(
    private router: Router,
    private _personalApplicationService: PersonalApplicationService) { }

  ngOnInit() {
    this.searchTerm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(i => this.search());

      this.load();
  }

  addNew() {
    this.router.navigate(['/personal-application', 'new']);
  }

  onSelect(event) {
    this.router.navigate(['/personal-application', event.selected[0].Id]);
  }


  private load() {
    //Ensure that we have personalApplicationStatusOptions
    this._personalApplicationService.getPersonalApplicationStatusOptions()
      .then((personalApplicationStatusOptions: Array<PersonalApplicationStatusOption>) => {
        this.personalApplicationStatusOptions = personalApplicationStatusOptions;

        this.search();
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
        return null;
      });
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
      StatusFilters: this.personalApplicationStatusOptionValue !== null ? [this.personalApplicationStatusOptionValue] : [],
      OrderBy: this.currentlyOrderBy,
      OrderByAscending: this.sortAsc,
      CurrentPage: this.offset + 1, //the API starts paging at 1 rather than 0
      PageSize: this.pageSize
    };

    this._personalApplicationService.search(searchObj)
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