import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

// import {
//   FinanceWebUiHeaderComponent,
//   FinanceWebUiFooterComponent,
//   FinanceWebUiNavigationComponent,
//   FinanceWebUiTimeLineComponent
// } from './shared/components/index';

import {
  TinyEditor
} from './shared/directives/index';
// MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, 

@Component({
  selector: 'finance-web-ui-app',
  templateUrl: './finance-web-ui.component.html',
  styleUrls: ['./finance-web-ui.component.scss'],
  // providers: [ HTTP_PROVIDERS ]
})

export class FinanceWebUiAppComponent implements OnInit {

  // console.log("in finance app now");


  public singleModel:string = '1';

  title = 'finance-web-ui works!';
  date: Date = new Date();

  currentTime = moment().format();
  constructor() { }

  ngOnInit() {
  }

}
