import { Address } from "app/application/address";

export class PersonalReferenceDetail {
  public Name: string = '';
  public Relationship: string = '';
  public Phone: string = '';
  public Address: Address = new Address();
}