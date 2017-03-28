import { AddressDetails } from "app/application";
import { Address } from "app/application/address";
import { ApplicationFinancialBuilder } from "app/application/personal/ApplicationFinancialBuilder";

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

  public ApplicationType: string = 'Single';
  public LoanType: string = 'Personal';
  public ClientName: string = '';
  public Applicant: PersonalEntity = new PersonalEntity();
  public Spouse: PersonalEntity = new PersonalEntity();
  public PersonalReferences: Array<PersonalReference> = [new PersonalReference()];
  public AccountReferences: Array<AccountReference> = [new AccountReference()];

  public Assets: Array<ApplicationFinancial> = [];
  public Liabilities: Array<ApplicationFinancial> = [];
  public Income: Array<ApplicationFinancial> = [];
  public Expenses: Array<ApplicationFinancial> = [];
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

export class PersonalReference {
  public Name: string = '';
  public Relationship: string = '';
  public Phone: string = '';
  public Address: Address = new Address();
}

export class AccountReference {
  public Name: string = '';
  public Type: string = '';
  public Reference: string = '';
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
  public CurrentAddressType: string = '';
  public CurrentAddressOther: string = '';
  public CurrentAddress: AddressDetails = new AddressDetails();
  public CurrentAddressYears: number = 0;
  public CurrentAddressMonths: number = 0;
  public PreviousAddress: AddressDetails = new AddressDetails();
  public PreviousAddressYears: number = 0;
  public PreviousAddressMonths: number = 0;
  public CurrentOccupation: Occupation = new Occupation();
  public PreviousOccupation: Occupation = new Occupation();
  public PersonalEmail: string = '';
  public BusinessEmail: string = '';
}