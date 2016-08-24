import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from '../customer.service';
import { TinyEditor } from '../../shared/directives/tiny-editor/tiny-editor.directive';

import { CustomersData } from '../mockup-data';
declare var tinymce: any;

@Component({
  moduleId: module.id,
  selector: 'app-customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css'],
  // directives: [TinyEditor],
  providers: [CustomerService]
})
export class CustomerDetailComponent implements OnInit {

  private customer: any = CustomersData[0];
  public notes: Array<any>;
  myText: string = 'my text';

  public note: any;

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
        Content: '<h1>Tim Content</h1>\n more text a;alsdkfjal;sdfjasl;dfj  \n a;sldfjasl;kfj'
      },
      {
        UserName: 'Marc',
        CreatedAt: new Date(),
        Content: '<h1>Marc Content</h1>'
      }
    ];

    this.note = {
      UserName: 'Tim',
      CreatedAt: new Date(),
      Content: '<h1>Tim Content</h1>'
    };
  }

}
