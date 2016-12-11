import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/index';

@Component({
  selector: 'fwui-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ AuthenticationService]
})
export class FinanceWebUiNavigationComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
