import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from '../customer.service';
import { TinyEditor } from '../../shared/directives/tiny-editor/tiny-editor.directive';

import { CustomersData } from '../mockup-data';

@Component({
  moduleId: module.id,
  selector: 'app-customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css'],
  directives: [TinyEditor],
  providers: [CustomerService]
})
export class CustomerDetailComponent implements OnInit {

  private customer: any = CustomersData[0];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
  }

}
