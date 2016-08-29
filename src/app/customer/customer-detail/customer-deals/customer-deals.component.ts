import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fwui-customer-deals',
  templateUrl: 'customer-deals.component.html',
  styleUrls: ['customer-deals.component.css']
})
export class CustomerDealsComponent implements OnInit {

  @Input() deals: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
