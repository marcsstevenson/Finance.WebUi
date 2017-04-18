import { Address } from "app/application/address";

export class PurchaserDetails {
  public FirstName: string = '';
  public LastName: string = '';
  public Address: Address = new Address();
  public HomePhoneNumber: string = '';
  public MobilePhoneNumber: string = '';
}