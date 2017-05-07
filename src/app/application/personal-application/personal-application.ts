import { AddressDetails } from "app/application";
import { Address } from "app/application/address";
import { ApplicationFinancialBuilder } from "app/application/personal-application/ApplicationFinancialBuilder";
import { PersonalAccountReferenceDetail } from "app/shared";
import { PersonalReferenceDetail } from "app/shared";

export class PersonalApplicationDetails{
  public CustomerId: string;
  public DealId: string;
  public JsonData: any;
  public Forms: Array<PersonalApplicationFormItem>;  
}

export class PersonalApplicationFormItem {
  public Id: string;
  public FormType: string;
}

export class PersonalApplication {
  constructor(
  ) {
    var applicationFinancialBuilder = new ApplicationFinancialBuilder();

    //Set the default options
    this.Assets = applicationFinancialBuilder.BuildAssets();
    this.Liabilities = applicationFinancialBuilder.BuildLiabilities();
    this.Income = applicationFinancialBuilder.BuildIncome();
    this.Expenses = applicationFinancialBuilder.BuildExpenses();
  }

  public Id: string = null;
  public Status: number = 0;
  public SchemaVersion: string = '1.0';
  public ApplicationType: string = 'Single';
  public LoanType: string = 'Personal';
  public ClientName: string = '';
  public Applicant: PersonalEntity = new PersonalEntity();
  public Spouse: PersonalEntity = new PersonalEntity();
  public PersonalReferences: Array<PersonalReferenceDetail> = [new PersonalReferenceDetail()];
  public PersonalAccountReferences: Array<PersonalAccountReferenceDetail> = [new PersonalAccountReferenceDetail()];
  
  public Assets: Array<ApplicationFinancial> = [];
  public Liabilities: Array<ApplicationFinancial> = [];
  public Income: Array<ApplicationFinancial> = [];
  public Expenses: Array<ApplicationFinancial> = [];
  
  public AddPersonalReference() {
    this.PersonalReferences.push(new PersonalReferenceDetail());
  }

  public DeletePersonalReference(index) {
    this.RemoveFromArray(index, this.PersonalReferences);
  }
  
  public AddPersonalAccountReference() {
    this.PersonalAccountReferences.push(new PersonalAccountReferenceDetail());
  }

  public DeletePersonalAccountReference(index) {
    this.RemoveFromArray(index, this.PersonalReferences);
  }

  private RemoveFromArray(index, array) {
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}

export class Occupation {
  constructor(
  ) { }

  public EmployerName: string = '';
  public Occupation: string = '';
  public Address: Address = new Address();
  public Years: number = 0;
  public Months: number = 0;
}

export class ApplicationFinancial {
  public OptionName: string = '';
  public Value: number = 0;
  public Note: string = '';
}

export class PersonalEntity {
  constructor(
  ) { }
  public FirstName: string = '';
  public PreferredName: string = '';
  public MiddleName: string = '';
  public LastName: string = '';
  public Gender: string = '';
  public DateOfBirth: string = '';
  public OriginCountry: string = '';
  public MaritalStatus: string = '';
  public NumOfDenpendants: number = 0;
  public DiversLicenceStatus: string = '';
  public OverseasDiversLicence: string = '';
  public IsNzResident: boolean = true;
  public IsWorkVisa: boolean = false;
  public LicenceNumberSa: string = '';
  public LicenceNumberSb: string = '';
  public MobilePhoneNumber: string = '';
  public HomePhoneNumber: string = '';
  public BusinessPhoneNumber: string = '';
  public ShowAddress: boolean = true;
  public CurrentAddressType: string = '';
  public CurrentAddressOther: string = '';
  public CurrentAddress: AddressDetails = new AddressDetails();
  public CurrentAddressYears: number = 0;
  public CurrentAddressMonths: number = 0;
  public PreviousAddress: AddressDetails = new AddressDetails();
  public PreviousAddressYears: number = 0;
  public PreviousAddressMonths: number = 0;
  public ShowOccupation: boolean = true;
  public CurrentOccupation: Occupation = new Occupation();
  public PreviousOccupation: Occupation = new Occupation();
  public PersonalEmail: string = '';
  public BusinessEmail: string = '';
}