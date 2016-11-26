import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fwui-financing-motorcycle-detail',
  templateUrl: 'financing-motorcycle-detail.component.html',
  styleUrls: ['financing-motorcycle-detail.component.css']
})
export class FinanceWebUiFinancingMotorcycleDetailComponent implements OnInit {

  @Input()
  motorcycleDetail;

  @Output()
  motorcycleDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.motorcycleDetailChange.emit(
      this.motorcycleDetail
    );
  }

  updateInputProperty(property, $event) {
    this.motorcycleDetail[property] = $event.target.value;
    this.update();
  }

}
