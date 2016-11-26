import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-transportation-form',
  templateUrl: 'transportation-form.component.html',
  styleUrls: ['transportation-form.component.css']
})
export class TransportationFormComponent implements OnInit {

  transportationForm = {};
  constructor() {
    this.transportationForm = {
      Vendor: {

      },
      Marine: {
        Motor: {},
        Trailer: {},
        TradeIn: {},
      },
      TradeVehicle: { },
      Vehicle: { },
      Motorcycle: {}
    };
  }

  ngOnInit() {
  }

  updateTransportationForm($event) {
    console.log('The event received in parent is: ', $event);
  }

}
