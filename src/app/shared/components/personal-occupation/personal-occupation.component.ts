import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-personal-occupation',
  templateUrl: './personal-occupation.component.html',
  styleUrls: ['./personal-occupation.component.scss']
})
export class FinanceWebUiPersonalOccupationComponent implements OnInit {
  @Input()
  personalDetail = {};

  @Output()
  personalDetailChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.personalDetailChange.emit(
      this.personalDetail
    );
  }

  updateInputProperty(property, $event) {
    this.personalDetail[property] = $event.target.value;
    this.update();
  }

  updateProperty(property, $event) {
    this.personalDetail[property] = $event;
    this.update();
  }

}
