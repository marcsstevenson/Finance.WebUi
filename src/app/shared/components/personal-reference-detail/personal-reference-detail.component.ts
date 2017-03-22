import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fwui-personal-reference-detail',
  templateUrl: './personal-reference-detail.component.html',
  styleUrls: ['./personal-reference-detail.component.css']
})
export class FinanceWebUiPersonalReferenceDetailComponent implements OnInit {

  @Input()
  referenceDetail;

  @Output()
  referenceDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  update() {
    console.log('I am sending update to parent');
    this.referenceDetailChange.emit(
      this.referenceDetail
    );
  }

  updateInputProperty(property, $event) {
    this.referenceDetail[property] = $event.target.value;
    this.update();
  }

  updateProperty(property, $event) {
    this.referenceDetail[property] = $event;
    this.update();
  }
}
