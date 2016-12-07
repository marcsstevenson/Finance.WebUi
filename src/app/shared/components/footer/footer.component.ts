import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/index';

@Component({
  //moduleId: module.id,
  selector: 'fwui-app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ AuthenticationService]
})
export class FinanceWebUiFooterComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
