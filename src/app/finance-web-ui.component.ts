import { Component, OnInit } from '@angular/core';
// import { CORE_DIRECTIVES } from '@angular/common';
// import { FORM_DIRECTIVES} from '@angular/forms';
import * as moment from 'moment';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
// MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, 

@Component({
  moduleId: module.id,
  selector: 'finance-web-ui-app',
  templateUrl: 'finance-web-ui.component.html',
  styleUrls: ['finance-web-ui.component.css'],
  directives: [
      AlertComponent, DATEPICKER_DIRECTIVES, BUTTON_DIRECTIVES
  ]
  // directives: [ BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

// BUTTON_DIRECTIVES,
export class FinanceWebUiAppComponent implements OnInit {

  public singleModel:string = '1';

  title = 'finance-web-ui works!';
  date: Date = new Date();

  currentTime = moment().format();
  constructor() { }

  ngOnInit() {
  }

}
