import { Component, OnInit } from '@angular/core';
import { AddressDetails } from "app/application";
import { PersonalApplication } from "app/application/personal/personal-application";

@Component({
  selector: 'app-application',
  templateUrl: './personal-application.component.html',
  styleUrls: ['./personal-application.component.scss']
})
export class PersonalApplicationComponent implements OnInit {
  private selectOptions: Array<any>;
  private personalApplication: PersonalApplication;

  constructor() { }

  ngOnInit() {
    this.selectOptions = [
      {
        name: 'Personal Use',
        value: 1
      },
      {
        name: 'Business Use',
        value: 2
      },
      {
        name: 'Sole Trader',
        value: 3
      }
    ];
    this.personalApplication = new PersonalApplication()
  }

  spouceDisplayed() {
    return this.personalApplication.ApplicationType === 'Joint';
  }

  updateApplicantDetails($event) {
    
  }

  updateApplicantReferences($event) {    
    
  }

  updateApplicantAccountReferences($event) {    
    
  }

  updateCurrentAddress($event) {

  }
  updateSelect(event) {
    console.log('The selected value is:', event);
  }

  public expandedFinancials = true;
  toggleExpandedFinancials() {
    this.expandedFinancials = !this.expandedFinancials;
  }
}
