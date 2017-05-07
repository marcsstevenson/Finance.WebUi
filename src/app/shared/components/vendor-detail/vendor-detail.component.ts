import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VehicleVendorDetails } from "app/shared/components/vendor-detail/vehicle-vendor-detail";

@Component({
  //moduleId: module.id,
  selector: 'fwui-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss']
})
export class FinanceWebUiVendorDetailComponent implements OnInit {

  @Input()
  vendorDetail: VehicleVendorDetails;

  @Output()
  vendorDetailChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public vendorTypes = [
      { value: 'dealer', display: 'Dealer' },
      { value: 'private', display: 'Private' }
  ];

  update() {
    this.vendorDetailChange.emit(
      this.vendorDetail
    );
  }

  updateInputProperty(property, $event) {
    this.vendorDetail[property] = $event.target.value;
    this.update();
  }

  public isPrivate(): boolean{
    return this.vendorDetail && this.vendorDetail.VendorType === 'private';
  }
}
