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
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Home Contents',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Car',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Bank',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Investments',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Kiwisaver',
          Note: '',
          Value: 0
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
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Hire Purchase',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Loan',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Credit Card',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Bank Overdraft',
          Note: '',
          Value: 0
        }
      ],
      Income: [
        {
          OptionName: 'Take Home Pay',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Secondary Income',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Spouse Take Home Pay',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Spouse Secondary Income',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Government Subsidy',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Other',
          Note: '',
          Value: 0
        },
      ],
      Expenses: [
        {
          OptionName: 'Mortgage',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Hire Purchase',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Loan',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Credit Card',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Miscellaneous',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Rates',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Phone',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Power',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Other',
          Note: '',
          Value: 0
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
