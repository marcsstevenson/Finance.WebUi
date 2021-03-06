import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/index';
@Component({
  //moduleId: module.id,
  selector: 'fwui-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ AuthenticationService]
})
export class FinanceWebUiHeaderComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut(event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
