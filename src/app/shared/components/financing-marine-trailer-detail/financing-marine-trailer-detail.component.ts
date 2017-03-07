import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fwui-financing-marine-trailer-detail',
  templateUrl: './financing-marine-trailer-detail.component.html',
  styleUrls: ['./financing-marine-trailer-detail.component.scss']
})
export class FinanceWebUiFinancingMarineTrailerDetailComponent implements OnInit {

  @Input()
  marineTrailerDetail;

  @Output()
  marineTrailerDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
