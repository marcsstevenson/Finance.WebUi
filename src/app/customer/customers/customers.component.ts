import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Http } from '@angular/http';

// import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from '@angular/common';

// import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
// import { NG_TABLE_DIRECTIVES } from 'ng2-table/ng2-table';

// import { Angular2DataTableModule } from 'angular2-data-table';

import {
  TableOptions,
  SelectionType,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';


import { CustomersData } from '../mockup-data';
import { CustomerService } from '../customer.service';

@Component({
  moduleId: module.id,
  selector: 'fwui-customers',
  templateUrl: 'customers.component.html',
  styleUrls: ['customers.component.css'],
  providers: [ CustomerService ]
})
export class CustomersComponent implements OnInit {

  public rows: Array<any> = [];
  public selections = [];

  public searchQuery: string;

  public options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 42,
    footerHeight: 50,
    limit: 10,
    rowHeight: 'auto',
    selectionType: SelectionType.multi,
    columns: [
      new TableColumn({ prop: 'Number', name: 'Customer Number' }),
      new TableColumn({ prop: 'FirstName', name: 'First Name' }),
      new TableColumn({ prop: 'LastName', name: 'Last Name' }),
      new TableColumn({ prop: 'CellNumber', name: 'Cell Number' }),
      new TableColumn({ prop: 'DriversLicenceNumber', name: 'Drivers Licence' }),
    ]
  });

  private data: Array<any> = CustomersData;

  constructor(
    private router: Router,
    private _customerService: CustomerService
    ) {
  }

  ngOnInit() {
    // this.loadCustomers();
    //using this function to get pagination details
    this.loadCustomersBySearch();
  }

  addCustomer () {
    this.router.navigate(['/customer', 'new']);
  }

  sorter (sortedBy) {
    console.log(sortedBy);
  }

  searchCustomer (searchQuery: string) {
    let searchObj = {
      SearchTerm: searchQuery,
      OrderBy: 'Name'
    };

    console.log("The searchObj is: ", searchObj);

    return this._customerService.searchCustomer(searchObj)
    .then((response) => {
      console.log("The response is: ", response);
      this.rows = response.SearchResults;
      return response;
    })
    .catch((err) => {
      //todo: show err message to users later
      console.log(err);
    });
  }

  onSelectionChange(selected) {
    this.router.navigate(['/customer', selected[0].Id]);
  }

  private loadCustomersBySearch () {
    this.searchCustomer('').then((response) => {
      this.options.count = response.TotalResultCount;
    });
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

  // public changePage (page: any, data: Array<any> = this.data): Array<any> {
  //   console.log(page);
  //   let start = (page.page - 1) * page.itemsPerPage;
  //   let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  //   return data.slice(start, end);
  // }

  // public changeSort(data: any, config: any): any {
  //   if (!config.sorting) {
  //     return data;
  //   }

  //   let columns = this.config.sorting.columns || [];
  //   let columnName: string = void 0;
  //   let sort: string = void 0;

  //   for (let i = 0; i < columns.length; i++) {
  //     if (columns[i].sort !== '') {
  //       columnName = columns[i].name;
  //       sort = columns[i].sort;
  //     }
  //   }

  //   if (!columnName) {
  //     return data;
  //   }

  //   // simple sorting
  //   return data.sort((previous: any, current: any) => {
  //     if (previous[columnName] > current[columnName]) {
  //       return sort === 'desc' ? -1 : 1;
  //     } else if (previous[columnName] < current[columnName]) {
  //       return sort === 'asc' ? -1 : 1;
  //     }
  //     return 0;
  //   });
  // }

  // public changeFilter(data: any, config: any): any {
  //   if (!config.filtering) {
  //     return data;
  //   }

  //   let filteredData: Array<any> = data.filter((item: any) =>
  //     item[config.filtering.columnName].match(this.config.filtering.filterString));

  //   return filteredData;
  // }

  // public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
  //   if (config.filtering) {
  //     Object.assign(this.config.filtering, config.filtering);
  //   }
  //   if (config.sorting) {
  //     Object.assign(this.config.sorting, config.sorting);
  //   }

  //   let filteredData = this.changeFilter(this.data, this.config);
  //   let sortedData = this.changeSort(filteredData, this.config);
  //   this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
  //   this.length = sortedData.length;
  // }

}
