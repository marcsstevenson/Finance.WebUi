import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-trade-vehicle-detail',
  templateUrl: './trade-vehicle-detail.component.html',
  styleUrls: ['./trade-vehicle-detail.component.scss']
})
export class FinanceWebUiTradeVehicleDetailComponent implements OnInit {

  @Input()
  tradeVehicleDetail;

  @Output()
  tradeVehicleDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public setNetValue(){
    var netValue = 0;

    if(!this.tradeVehicleDetail) return;

    if(this.tradeVehicleDetail.Value)
      netValue += +this.tradeVehicleDetail.Value;

    if(this.tradeVehicleDetail.Balance)
      netValue -= +this.tradeVehicleDetail.Balance;

    console.log(netValue);

    this.tradeVehicleDetail.NetValue = netValue;

    console.log(this.tradeVehicleDetail.NetValue);
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
