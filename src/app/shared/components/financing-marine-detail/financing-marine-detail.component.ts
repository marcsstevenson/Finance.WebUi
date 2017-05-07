import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-financing-marine-detail',
  templateUrl: './financing-marine-detail.component.html',
  styleUrls: ['./financing-marine-detail.component.scss']
})
export class FinanceWebUiFinancingMarineDetailComponent implements OnInit {

  @Input()
  marineDetail;

  @Output()
  marineDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public showDealershipVendorDetails(): boolean{
    // return this.marineDetail.
    return true;
  }

  public marineTypes = [
      { value: 'Boat', display: 'Boat' },
      { value: 'Jetski', display: 'Jetski' }
  ];

  public conditionOptions = [
      { value: 'New', display: 'New' },
      { value: 'Used', display: 'Used' }
  ];

  update() {
    console.log('I am sending update to parent');
    this.marineDetailChange.emit(
      this.marineDetail
    );
  }

  updateInputProperty(property, $event) {
    this.marineDetail[property] = $event.target.value;
    this.update();
  }

  updateMotorInputProperty(property, $event) {
    this.marineDetail.Motor[property] = $event.target.value;
    this.update();
  }

  updateTrailerInputProperty(property, $event) {
    this.marineDetail.Trailer[property] = $event.target.value;
    this.update();
  }

  updateTradeInInputProperty(property, $event) {
    this.marineDetail.TradeIn[property] = $event.target.value;
    this.update();
  }

}
