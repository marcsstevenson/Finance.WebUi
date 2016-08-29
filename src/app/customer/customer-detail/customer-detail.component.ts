import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from '../customer.service';
import { TinyEditor } from '../../shared/directives/tiny-editor/tiny-editor.directive';

import { CustomerDealsComponent } from './customer-deals/customer-deals.component';

import { CustomersData } from '../mockup-data';
declare var tinymce: any;

@Component({
  moduleId: module.id,
  selector: 'app-customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css'],
  directives: [CustomerDealsComponent],
  providers: [CustomerService]
})
export class CustomerDetailComponent implements OnInit {

  private customer: any = CustomersData[0];
  public notes: Array<any>;
  public deals: Array<any>;

  myText: string = 'my text';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    tinymce.init(
      {
        selector: "#test",
      });

    this.notes = [
      {
        UserName: 'Tim',
        CreatedAt: new Date(),
        Content: '<h3>Tim Content</h3>\n more text a;alsdkfjal;sdfjasl;dfj  \n a;sldfjasl;kfj'
      },
      {
        UserName: 'Marc',
        CreatedAt: new Date(),
        Content: '<h3>Marc Content</h3>'
      }
    ];

    this.deals = [
      {
        secureDescription: '02 Audi A3',
        status: 'Settled /Paid',
        netIncome: '1,226.73'
      },
      {
        secureDescription: '15 Dorado',
        status: 'Settled Awaiting Commission',
        netIncome: '375.55'
      }
    ];
  }

}
