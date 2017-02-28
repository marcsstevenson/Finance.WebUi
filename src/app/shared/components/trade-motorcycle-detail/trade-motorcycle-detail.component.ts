import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fwui-trade-motorcycle-detail',
  templateUrl: './trade-motorcycle-detail.component.html',
  styleUrls: ['./trade-motorcycle-detail.component.css']
})
export class FinanceWebUiTradeMotorcycleDetailComponent implements OnInit {

  @Input()
  tradeMotorcycleDetail;

  @Output()
  tradeMotorcycleDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
