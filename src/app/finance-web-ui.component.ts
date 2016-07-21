import { Component } from '@angular/core';
//Not sure why this is not working
//https://medium.com/front-end-hacking/getting-started-using-angular-material-2-in-an-angular-2-angular-cli-application-bbeecdf6bfe2#.acctunqmv
//  import { MdButton } from '@angular2-material/button';
//  import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'finance-web-ui-app',
  templateUrl: 'finance-web-ui.component.html',
  styleUrls: ['finance-web-ui.component.css'],
  //Not sure why this is not working
  //MdCheckbox  
  // directives: [MdButton],
  
  // template: `
  // <button md-raised-button color='primary'>this is a magical button</button>
  // `
})
export class FinanceWebUiAppComponent {
  title = 'finance-web-ui works!';
}
