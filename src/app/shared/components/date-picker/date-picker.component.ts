import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class FinanceWebUiDatePickerComponent implements OnInit {

  @Input()
  dateModel: Date;

  @Input()
  label: string;

  @Input()
  placeHolder: string;

  @Output()
  dateModelChange: EventEmitter<string> = new EventEmitter<string>();

  private showDatepicker = false;

  showPopup() {
    this.showDatepicker = true;
  }

  hidePopup() {
    this.showDatepicker = false;
  }

  updateValue(event) {
    this.showDatepicker = false;
    this.dateModel = event;
    if (event) {
      this.dateModelChange.emit(event);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
