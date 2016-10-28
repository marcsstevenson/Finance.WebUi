import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class DropDownListValue {
  label: string;
  value: string;

  constructor(lablel: string, value: string) {
    this.label = lablel;
    this.value = value;
  }
}

@Component({
  moduleId: module.id,
  selector: 'fwui-select',
  templateUrl: 'fwui-select.component.html',
  styleUrls: ['fwui-select.component.css']
})
export class FinanceWebUiSelectComponent implements OnInit {
  @Input()
  listName: string;

  @Input()
  listValues: DropDownListValue[];

  @Output()
  value: DropDownListValue;

  @Output()
  valueChange = new EventEmitter();

  constructor() {
    // this.valueChange = new EventEmitter();
  }

  select(value) {
    this.valueChange.emit(value);
  }
  OnInit() {

  }

  ngOnInit() {

  }
}
