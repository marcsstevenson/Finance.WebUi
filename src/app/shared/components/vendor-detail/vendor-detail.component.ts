import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss']
})
export class FinanceWebUiVendorDetailComponent implements OnInit {

  @Input()
  vendorDetail;

  @Output()
  vendorDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.vendorDetailChange.emit(
      this.vendorDetail
    );
  }

  updateInputProperty(property, $event) {
    this.vendorDetail[property] = $event.target.value;
    this.update();
  }
}
