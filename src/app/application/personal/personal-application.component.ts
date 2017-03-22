import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './personal-application.component.html',
  styleUrls: ['./personal-application.component.scss']
})
export class PersonalApplicationComponent implements OnInit {

  private selectOptions: Array<any>;

  private personalApplication = {
      CurrentAddress: {
          Type: '',
          StreetNumber: '',
          StreetName: '',
          Suburb: '',
          City: '',
          PostCode: '',
          Years: 0,
          Months: 0
        },
      Applicant: {
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        OriginCountry: '',
        MaritalStatus: '',
        NumOfDenpendants: 0,
        DiversLicenceStatus: '',
        OverseasDiversLicence: '',
        IsNzResident: true,
        IsWorkVisa: false,
        LicenceNumberSa: '',
        LicenceNumberSb: '',
        CellNumber: '',
        PhoneNumber: '',
        FaxNumber: '',
        CellNumberBusiness: '',
        PhoneNumberBusiness: '',
        FaxNumberBusiness: '',
        CurrentAddress: {
          Type: '',
          StreetNumber: '',
          StreetName: '',
          Suburb: '',
          City: '',
          PostCode: '',
          Years: 0,
          Months: 0
        },
        PrevioiusAddress: {
          Type: '',
          Street: '',
          Suburb: '',
          City: '',
          PostCode: '',
          Years: 0,
          Months: 0
        },
        CurrentOccupation: {
          EmployerName: '',
          Occupation: '',
          Address: {
            Street: '',
            Suburb: '',
            City: '',
            PostCode: '',
          },
          Years: 0,
          Months: 0
        },
        PreviousOccupation: {
          EmployerName: '',
          Occupation: '',
          Address: {
            Street: '',
            Suburb: '',
            City: '',
            PostCode: '',
          },
          Years: 0,
          Months: 0
        },
        //extra needs to be considered server side
        PersonalEmail: '',
        BusinessEmail: '',
        LicenceVersion: '',
        LicenceNumber: '',
        References: [
          {
            Name: '',
            Relationship: '',
            Phone: '',
            Address: {
              Street: '',
              Suburb: '',
              City: '',
              PostCode: '',
            }
          }
        ]
      },
      Spouse: {
        FirstName: '',
        LastName: '',
        Gender: '',
        DateOfBirth: '',
        OriginCountry: '',
        MaritalStatus: '',
        NumOfDenpendants: 0,
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
        References: [
          {
            Name: '',
            Relationship: '',
            Phone: '',
            Address: {
              Street: '',
              Suburb: '',
              City: '',
              PostCode: '',
            }
          }
        ]

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
        }
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

    
  }

  updateApplicantDetails($event) {
    console.log('The event received in parent is: ', $event);
  }
  updateCurrentAddress($event) {

  }
  updateSelect(event) {
    console.log('The selected value is:', event);
  }

}
