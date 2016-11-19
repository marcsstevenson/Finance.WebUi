import { Component, OnInit } from '@angular/core';
// import { }


@Component({
  moduleId: module.id,
  selector: 'app-application',
  templateUrl: 'personal-application.component.html',
  styleUrls: ['personal-application.component.css']
})
export class PersonalApplicationComponent implements OnInit {

  private selectOptions: Array<any>;

  private personalApplication: any;
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

    this.personalApplication = {
      applicant: {
        FirstName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        OriginCountry: '',
        MaritalStatus: '',
        DiversLicenceStatus: '',
        OverseasDiversLicence: '',
        LicenceNumberSa: '',
        LicenceNumberSb: '',
        CellNumber: '',
        PhoneNumber: '',
        FaxNumber: '',
        CellNumberBusiness: '',
        PhoneNumberBusiness: '',
        FaxNumberBusiness: '',

        //extra needs to be considered server side
        PersonalEmail: '',
        BusinessEmail: '',
        LicenceVersion: '',
        LicenceNumber: ''

      }
    };
  }

  updateApplicantDetails($event) {
    console.log('The event received in parent is: ', $event);
  }
  updateSelect(event) {
    console.log('The selected value is:', event);
  }

}
