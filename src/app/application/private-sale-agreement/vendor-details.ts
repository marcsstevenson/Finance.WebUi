import { Address } from "app/application/address";

export class VendorDetails {
  public FirstName: string = '';
  public LastName: string = '';
  public Address: Address = new Address();
  public HomePhoneNumber: string = '';
  public MobilePhoneNumber: string = '';
  public BankAccountNumber: string = '';
  public AccountName: string = '';
}