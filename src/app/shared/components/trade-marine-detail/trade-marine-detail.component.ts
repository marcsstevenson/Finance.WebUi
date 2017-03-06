import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-trade-marine-detail',
  templateUrl: './trade-marine-detail.component.html',
  styleUrls: ['./trade-marine-detail.component.scss']
})
export class FinanceWebUTradeMarineDetailComponent implements OnInit {

  @Input()
  tradeMarineDetail;

  @Output()
  tradeMarineDetailChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.tradeMarineDetailChange.emit(
      this.tradeMarineDetail
    );
  }

  updateInputProperty(property, $event) {
    this.tradeMarineDetail[property] = $event.target.value;
    this.update();
  }

}
