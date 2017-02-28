import { Component, OnInit } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'app-transportation-form',
  templateUrl: './transportation-form.component.html',
  styleUrls: ['./transportation-form.component.scss']
})
export class TransportationFormComponent implements OnInit {

  transportationForm = {
      TransportType: '',
      Vendor: {

      },
      Marine: {
        Motor: {},
        Trailer: {},
        TradeIn: {},
      },
      TradeVehicle: { },
      Vehicle: { },
      Motorcycle: {},
      FinancialDetail: {}
    };
  constructor() {
  }

  ngOnInit() {
  }

  updateTransportationForm($event) {
    console.log('The event received in parent is: ', $event);
  }

  selectForm(){
    console.log('The selected tranport type: ', this.transportationForm.TransportType);
  }

}
