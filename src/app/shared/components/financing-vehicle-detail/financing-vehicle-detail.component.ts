import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fwui-financing-vehicle-detail',
  templateUrl: 'financing-vehicle-detail.component.html',
  styleUrls: ['financing-vehicle-detail.component.css']
})
export class FinanceWebUiFinancingVehicleDetailComponent implements OnInit {

  @Input()
  vehicleDetail;

  @Output()
  vehicleDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.vehicleDetailChange.emit(
      this.vehicleDetail
    );
  }

  updateInputProperty(property, $event) {
    this.vehicleDetail[property] = $event.target.value;
    this.update();
  }

}
