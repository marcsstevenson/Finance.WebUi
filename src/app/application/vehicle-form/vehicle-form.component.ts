import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  private vehicleForm = {
    Vendor: {

    },
    FiancedVehicles: [
      {

      }
    ],
    TradeInVehicles: [
      {

      }
    ],
    FinancialDetail: {

    }
  };

  constructor() { }

  ngOnInit() {
  }

}
