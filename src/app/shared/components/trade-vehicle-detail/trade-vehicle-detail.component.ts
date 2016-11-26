import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fwui-trade-vehicle-detail',
  templateUrl: 'trade-vehicle-detail.component.html',
  styleUrls: ['trade-vehicle-detail.component.css']
})
export class FinanceWebUiTradeVehicleDetailComponent implements OnInit {

  @Input()
  tradeVehicleDetail;

  @Output()
  tradeVehicleDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.tradeVehicleDetailChange.emit(
      this.tradeVehicleDetail
    );
  }

  updateInputProperty(property, $event) {
    this.tradeVehicleDetail[property] = $event.target.value;
    this.update();
  }

}
