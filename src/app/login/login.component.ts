import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';
@Component({
  moduleId: module.id,
  selector: 'fwui-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(
    private _authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login () {
    this._authService.login(this.userName, this.password)
    .then((response: any) => {
      //todo: change this to home page in future?
      //this.router.navigate(['/customer']); 

      let authData = response._body;
      
    })
    .catch((err) => {
      console.log(err); //todo: add a nice error message
    });
  }
}
