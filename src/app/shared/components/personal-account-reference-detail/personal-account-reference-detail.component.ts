import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fwui-personal-account-reference-detail',
  templateUrl: './personal-account-reference-detail.component.html',
  styleUrls: ['./personal-account-reference-detail.component.css']
})
export class FinanceWebUiPersonalAccountReferenceDetailComponent implements OnInit {

  @Input()
  accountReferenceDetail = {};

  @Output()
  accountReferenceDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
