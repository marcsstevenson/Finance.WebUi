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
  value: any;

  @Output()
  valueChange = new EventEmitter();

  private show = false;
  private opened = false;

  constructor() {
    // this.valueChange = new EventEmitter();
  }

  OnInit() {

  }

  ngOnInit() {

  }

  select($event, value) {
    this.show = false;
    this.opened = false;
    this.valueChange.emit(value);
  }

  showOptions() {
    this.show = true;
    this.opened = true;
  }

  hideOptions() {
    this.show = false;
    this.opened = false;
  }

  clear() {
    this.value = '';
  }
}
