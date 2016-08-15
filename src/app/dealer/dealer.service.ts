import { Injectable } from '@angular/core';


export class Address {
  constructor(
    public Id: number,
    public AddressLine1: string,
    public AddressLine2: string,
    public AddressLine3: string,
    public City: string,
    public ContactPhoneNumber: string,
    public DateCreated: Date,
    public DateModified: Date,
    public IsDefault: boolean,
    public Name: string,
    public OtherInformation: string,
    public Postcode: string,
    public Region: string,
    public Type: string
  ) {

  }
}

export class Dealer {
  constructor(
    public id: number,
    public BankAccountName: string,
    public BankAccountNumber: string,
    public BankBranchName: string,
    public BankingCompany: string,
    public CellArea: string,
    public CellCountry: string,
    public CellNumber: string,
    public ContactName: string,
    public DateCreated: Date,
    public DateModified: Date,
    public Email: string,
    public FaxArea: string,
    public FaxCountry: string,
    public FaxNumber: string,
    public IsEnabled: boolean,
    public Name: string,
    public PhoneArea: string,
    public PhoneCountry: string,
    public PhoneNumber: string,
    public Website: string,
    public Addresses: Array<Address>
    ) {

  }
}

let mockDealers = [
  {
    id: 1,
    BankAccountName: 'bank account name',
    BankAccountNumber: '03-0131-0567783-000',
    BankBranchName: 'Riccarton',
    BankingCompany: 'ANZ',
    CellArea: '021',
    CellCountry: 'New Zealand',
    CellNumber: '335 5560',
    ContactName: 'Tim Hong',
    DateCreated: new Date(),
    DateModified: new Date(),
    Email: '123@123.com',
    FaxArea: '03',
    FaxCountry: 'New Zealand',
    FaxNumber: '335 6679',
    IsEnabled: true,
    Name: 'Jetski Imports Limited',
    PhoneArea: '03',
    PhoneCountry: 'New Zealand',
    PhoneNumber: '335 6677',
    Website: 'http://www.jetskiimportsltd.co.nz/',
    Addresses: [
      {
        Id: 2,
        AddressLine1: '228 Alec Craig Way',
        AddressLine2: '',
        AddressLine3: '',
        City: 'Whangaparaoa',
        ContactPhoneNumber: '',
        DateCreated: new Date(),
        DateModified: new Date(),
        IsDefault: true,
        Name: 'Head Quarter',
        OtherInformation: '',
        Postcode: '0930',
        Region: 'Gulf Harbour',
        Type: ''
      }
    ]
},
{
  id: 2,
  BankAccountName: 'bank account name',
  BankAccountNumber: '08-0131-0567783-000',
  BankBranchName: 'Bush Inn',
  BankingCompany: 'BNZ',
  CellArea: '021',
  CellCountry: 'New Zealand',
  CellNumber: '335 5560',
  ContactName: 'Marc Stevenson',
  DateCreated: new Date(),
  DateModified: new Date(),
  Email: '222@123.com',
  FaxArea: '03',
  FaxCountry: 'New Zealand',
  FaxNumber: '335 6679',
  IsEnabled: true,
  Name: 'JJ Motors',
  PhoneArea: '09',
  PhoneCountry: 'New Zealand',
  PhoneNumber: '2706522',
  Website: '',
  Addresses: [
    {
      Id: 1,
      AddressLine1: '3 Hans Street 1062 ',
      AddressLine2: '',
      AddressLine3: '',
      City: 'Auckland',
      ContactPhoneNumber: '',
      DateCreated: new Date(),
      DateModified: new Date(),
      IsDefault: true,
      Name: 'Head Quarter',
      OtherInformation: '',
      Postcode: '0930',
      Region: 'Otahuhu',
      Type: ''
    }
  ]
}];

let dealersPromise = Promise.resolve(mockDealers);

@Injectable()
export class DealerService {
  constructor() { }
  getDealers() {
    return dealersPromise;
  }

  getDealer(id: number | string) {
    return dealersPromise
    .then(dealers => dealers.find(dealer => dealer.id === +id));
  }
}
