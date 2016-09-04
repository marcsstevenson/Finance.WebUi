import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Http } from '@angular/http';

import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from '@angular/common';

// import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
// import { NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';

// import { Angular2DataTableModule } from 'angular2-data-table';

// import {
//   TableOptions,
//   SelectionType,
//   TableColumn,
//   ColumnMode
// } from 'angular2-data-table';


import { CustomersData } from '../mockup-data';
import { CustomerService } from '../customer.service';

@Component({
  moduleId: module.id,
  selector: 'fwui-customers',
  templateUrl: 'customers.component.html',
  styleUrls: ['customers.component.css'],
  directives: [
    NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES
  ],
  providers: [ CustomerService ]
})
export class CustomersComponent implements OnInit {

  public rows: Array<any> = [];
  public columns: Array<any> = [
    { title: 'First Name', name: 'FirstName' },
    { title: 'Last Name', name: 'LastName' },
    { title: 'Date of Birth', name: 'DateOfBirth', sort: false },
    { title: 'Email', name: 'Email', sort: 'asc' },
  ];

  public searchQuery: string;

  // public options = new TableOptions({
  //   columnMode: ColumnMode.force,
  //   headerHeight: 50,
  //   footerHeight: 50,
  //   limit: 10,
  //   rowHeight: 'auto',
  //   selectionType: SelectionType.multi,
  //   columns: [
  //     new TableColumn({ name: 'FirstName' }),
  //     new TableColumn({ name: 'LastName'}),
  //     new TableColumn({ name: 'DateOfBirth'}),
  //     new TableColumn({ name: 'Email'}),
  //   ]
  // });
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '', columnName: 'FirstName' }
  };

  private data: Array<any> = CustomersData;
  

  constructor(
    private router: Router,
    private _customerService: CustomerService
    ) {
    this.length = this.data.length;
  }

  ngOnInit() {
    this.onChangeTable(this.config);
    this.rows = this.data;

    this.loadCustomers();
  }


  addCustomer () {
    this.router.navigate(['/customer', 'new']);
  }

  searchCustomer (searchQuery: string) {
    let searchObj = {
      NameContains: searchQuery,
      // NumberContains: searchQuery,
      // CellContains: searchQuery,
      // DriversLicenceNumberContains: searchQuery,
      OrderBy: 'Name'
    };

    console.log("The searchObj is: ", searchObj);

    this._customerService.searchCustomer(searchObj)
    .then((response) => {
      console.log("The response is: ", response);
      this.rows = response.SearchResults;
    })
    .catch((err) => {
      //todo: show err message to users later
      console.log(err);
    });
  }

  public changePage (page: any, data: Array<any> = this.data): Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  private loadCustomers () {
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

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    let filteredData: Array<any> = data.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

}
