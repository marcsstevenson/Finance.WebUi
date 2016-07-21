import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'finance-web-ui-app',
  templateUrl: 'finance-web-ui.component.html',
  styleUrls: ['finance-web-ui.component.css']
})
export class FinanceWebUiAppComponent implements OnInit {

  title = 'finance-web-ui works!';
  constructor() { }

  ngOnInit() {
  }

}
