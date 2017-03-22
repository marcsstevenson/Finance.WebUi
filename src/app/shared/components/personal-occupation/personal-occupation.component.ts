import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-personal-occupation',
  templateUrl: './personal-occupation.component.html',
  styleUrls: ['./personal-occupation.component.scss']
})
export class FinanceWebUiPersonalOccupationComponent implements OnInit {
  @Input()
  occupationDetail = {};

  @Output()
  occupationDetailChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.occupationDetailChange.emit(
      this.occupationDetail
    );
  }

  updateInputProperty(property, $event) {
    this.occupationDetail[property] = $event.target.value;
    this.update();
  }

  updateProperty(property, $event) {
    this.occupationDetail[property] = $event;
    this.update();
  }

}
