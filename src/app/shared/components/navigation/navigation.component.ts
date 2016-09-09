import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthenticationService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'fwui-app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ AuthenticationService]
})
export class FinanceWebUiNavigationComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
