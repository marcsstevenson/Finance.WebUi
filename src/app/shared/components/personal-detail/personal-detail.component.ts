import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  FormControl, FormGroup} from '@angular/forms';

@Component({
  //moduleId: module.id,
  selector: 'fwui-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class FinanceWebUiPersonalDetailComponent implements OnInit {

  @Input()
  personalDetail = {

  };

  @Output()
  personalDetailChange = new EventEmitter();

  isResidentOptions:  Array<any>;

  // workVisaOptions = [
  //   {
  //     value: true,
  //     display: 'Yess'
  //   },
  //   {
  //     value: false,
  //     display: 'No'
  //   }
  // ];

  ngInit() {
  //   this.workVisaOptions = [
  //   {
  //     value: true,
  //     display: 'Yess'
  //   },
  //   {
  //     value: false,
  //     display: 'No'
  //   }
  // ];

    // this.isResidentOptions = [
    //   {
    //     value: true,
    //     display: 'Yess'
    //   },
    //   {
    //     value: false,
    //     display: 'No'
    //   }
    // ];
  }
  // get personalDetail() {
  //   return this.personalDetail;
  // }

  update() {
    console.log('I am sending update to parent');
    this.personalDetailChange.emit(
      this.personalDetail
    );
  }

  // updateFirstName(property, $event) {
  //   this.personalDetail.FirstName = $event.target.value;

  //   this.update();
  // }

  updateResidency(isNzResident: boolean) {
    this.personalDetail['IsNzResident'] = isNzResident;
    this.update();
  }

  updateWorkVisaStatus(isWorkVisa: boolean) {
    this.personalDetail['IsWorkVisa'] = isWorkVisa;
    this.update();
  }

  updateInputProperty(property, $event) {
    this.personalDetail[property] = $event.target.value;
    this.update();
  }

  updateProperty(property, $event) {
    this.personalDetail[property] = $event;
    this.update();
  }

  constructor() { }

  ngOnInit() {
  }

}
