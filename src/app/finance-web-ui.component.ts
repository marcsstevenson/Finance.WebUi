import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'finance-web-ui-app',
  templateUrl: 'finance-web-ui.component.html',
  styleUrls: ['finance-web-ui.component.css']
})
export class FinanceWebUiAppComponent implements OnInit {

  title = 'finance-web-ui works!';

  currentTime = moment().format();
  constructor() { }
  

  ngOnInit() {
  }

}
