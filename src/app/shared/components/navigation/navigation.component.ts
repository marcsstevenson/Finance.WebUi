import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'fwui-app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FinanceWebUiNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
