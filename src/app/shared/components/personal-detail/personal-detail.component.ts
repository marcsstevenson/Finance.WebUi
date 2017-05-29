import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonalEntity } from "app/application/personal-application/personal-application";
import { AddressDetails } from "app/application";

@Component({
  //moduleId: module.id,
  selector: 'fwui-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class FinanceWebUiPersonalDetailComponent implements OnInit {

  @Input() personalDetail: PersonalEntity;
  @Input() copyFrom: PersonalEntity;

  @Input() title: string;
  @Output() personalDetailChange = new EventEmitter();

  isResidentOptions: Array<any>;
  expanded: boolean = true;

  public toggleExpanded(): void {
     this.expanded = !this.expanded;
  }

  ngOnInit() {
  }

  OnInit() {
  }

  showCopyFrom(): boolean {
    return this.copyFrom != null;
  }

  update() {
    this.personalDetailChange.emit(
      this.personalDetail
    );
  }

  updateInputProperty(property, $event) {
    // console.log(this.personalDetail.Gender);

    this.personalDetail[property] = $event.target.value;

    // console.log(this.personalDetail.FirstName);
    // console.log(this.personalDetail.Gender);

    this.update();
  }

  updateProperty(property, $event) {
    this.personalDetail[property] = $event;
    this.update();
  }

  currentAddressChanged($event) {
    console.log($event);
    this.update();
  }

  copyCurrentAddress() {
    if(this.copyFrom != null && this.copyFrom.CurrentAddress != null)
      this.copyAddress(this.personalDetail.CurrentAddress, this.copyFrom.CurrentAddress);
  }

  copyAddress(from: AddressDetails, to: AddressDetails){
    to.City = from.City;
    to.Country = from.Country;
    to.Months = from.Months;
    to.PostCode = from.PostCode;
    to.State = from.State;
    to.StreetName = from.StreetName;
    to.StreetNumber = from.StreetNumber;
    to.Suburb = from.Suburb;
    to.Type = from.Type;
    to.Years = from.Years;
  }

  public displayPreviousAddress(): boolean{
    if(this.personalDetail && this.personalDetail.CurrentAddressYears && this.personalDetail.CurrentAddressYears >= 3)
      return false;
    else
      return true;
  }

  public displayPreviousOccupation(): boolean{
    if(this.personalDetail && this.personalDetail.CurrentOccupation && this.personalDetail.CurrentOccupation.Years >= 3)
      return false;
    else
      return true;
  }

  constructor() { }
}
