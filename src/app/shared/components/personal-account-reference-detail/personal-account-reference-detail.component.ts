import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonalAccountReferenceDetail} from 'app/shared'

@Component({
  selector: 'fwui-personal-account-reference-detail',
  templateUrl: './personal-account-reference-detail.component.html',
  styleUrls: ['./personal-account-reference-detail.component.css']
})
export class FinanceWebUiPersonalAccountReferenceDetailComponent implements OnInit {

  @Input() personalAccountReferenceDetail: PersonalAccountReferenceDetail = null;

  @Output() changed = new EventEmitter();

  constructor() { }

  updated(){
    this.changed.emit(this.personalAccountReferenceDetail);
  }

  ngOnInit() {
  }
}