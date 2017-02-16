import { Component, OnInit } from '@angular/core';
// import { }


@Component({
  //////moduleId: module.id,
  selector: 'app-application',
  templateUrl: './personal-application.component.html',
  styleUrls: ['./personal-application.component.scss']
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
      Applicant: {
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
        LicenceNumber: '',
        Reference: {
          Name: '',
          Relationship: '',
          Phone: ''
        }

      },
      Spouse: {
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
        LicenceNumber: '',
        Reference: {
          Name: '',
          Relationship: '',
          Phone: ''
        }

      },
      Assets: [
        {
          OptionName: 'Home',
          Note: ''
        },
        {
          OptionName: 'Home Contents',
          Note: ''
        },
        {
          OptionName: 'Car',
          Note: ''
        },
        {
          OptionName: 'Bank',
          Note: ''
        },
        {
          OptionName: 'Investments',
          Note: ''
        },
        {
          OptionName: 'Kiwisaver',
          Note: ''
        }
      ],
      // Assets: {
      //   Properties: [],
      //   HomeContents: [],
      //   Transportations: [],
      //   Bank: '',
      //   Investments: '',
      //   Kiwisaver: '',
      //   Other: ''
      // },
      Liabilities: [
        {
          OptionName: 'Mortgage',
          Note: ''
        },
        {
          OptionName: 'Hire Purchase',
          Note: ''
        },
        {
          OptionName: 'Loan',
          Note: ''
        },
        {
          OptionName: 'Credit Card',
          Note: ''
        },
        {
          OptionName: 'Bank Overdraft',
          Note: ''
        }
      ],
      Income: [
        {
          OptionName: 'Take Home Pay',
          Note: ''
        },
        {
          OptionName: 'Secondary Income',
          Note: ''
        },
        {
          OptionName: 'Spouse Take Home Pay',
          Note: ''
        },
        {
          OptionName: 'Spouse Secondary Income',
          Note: ''
        },
        {
          OptionName: 'Government Subsidy',
          Note: ''
        },
        {
          OptionName: 'Other',
          Note: ''
        },
      ],
      Expenses: [
        {
          OptionName: 'Mortgage',
          Note: ''
        },
        {
          OptionName: 'Hire Purchase',
          Note: ''
        },
        {
          OptionName: 'Loan',
          Note: ''
        },
        {
          OptionName: 'Credit Card',
          Note: ''
        },
        {
          OptionName: 'Miscellaneous',
          Note: ''
        },
        {
          OptionName: 'Rates',
          Note: ''
        },
        {
          OptionName: 'Phone',
          Note: ''
        },
        {
          OptionName: 'Power',
          Note: ''
        },
        {
          OptionName: 'Other',
          Note: ''
        },
      ]
    };
  }

  updateApplicantDetails($event) {
    console.log('The event received in parent is: ', $event);
  }
  updateSelect(event) {
    console.log('The selected value is:', event);
  }

}
