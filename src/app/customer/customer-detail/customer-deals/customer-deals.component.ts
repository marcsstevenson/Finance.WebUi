import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'fwui-customer-deals',
  templateUrl: 'customer-deals.component.html',
  styleUrls: ['customer-deals.component.css']
})
export class CustomerDealsComponent implements OnInit {

  @Input() deals: Array<any>;
  @Input() customerId: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  addDeal () {
    this.router.navigate(['/deal/new', { customerId: this.customerId }]);
  }

}
