import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fwui-financing-marine-motor-detail',
  templateUrl: './financing-marine-motor-detail.component.html',
  styleUrls: ['./financing-marine-motor-detail.component.scss']
})
export class FinanceWebUiFinancingMarineMotorDetailComponent implements OnInit {

  @Input()
  marineMotorDetail;

  @Output()
  marineMotorDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.marineMotorDetailChange.emit(
      this.marineMotorDetail
    );
  }

  updateInputProperty(property, $event) {
    this.marineMotorDetail[property] = $event.target.value;
    this.update();
  }
}
