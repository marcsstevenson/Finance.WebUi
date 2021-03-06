import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fwui-trade-motorcycle-detail',
  templateUrl: './trade-motorcycle-detail.component.html',
  styleUrls: ['./trade-motorcycle-detail.component.scss']
})
export class FinanceWebUiTradeMotorcycleDetailComponent implements OnInit {

  @Input()
  tradeMotorcycleDetail;

  @Output()
  tradeMotorcycleDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.tradeMotorcycleDetailChange.emit(
      this.tradeMotorcycleDetail
    );
  }

  updateInputProperty(property, $event) {
    this.tradeMotorcycleDetail[property] = $event.target.value;
    this.update();
  }

}
