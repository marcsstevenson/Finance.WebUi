import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fwui-personal-detail',
  templateUrl: 'personal-detail.component.html',
  styleUrls: ['personal-detail.component.css']
})
export class FinanceWebUiPersonalDetailComponent implements OnInit {

  @Input()
  personalDetail = {};

  @Output()
  personalDetailChange = new EventEmitter();


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
