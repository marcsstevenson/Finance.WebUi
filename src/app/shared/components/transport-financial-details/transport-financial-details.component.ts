import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-transport-financial-details',
  templateUrl: './transport-financial-details.component.html',
  styleUrls: ['./transport-financial-details.component.scss']
})
export class FinanceWebUiTransportFinancialDetailsComponent implements OnInit {

  @Input()
  financialDetail;

  @Output()
  financialDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.financialDetailChange.emit(
      this.financialDetail
    );
  }

  updateInputProperty(property, $event) {
    this.financialDetail[property] = $event.target.value;
    this.update();
  }

  calculateGrossCost () {
    return 0;
  }

  calculateTotalDeposit() {
    return 0;
  }
}
