import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  private vehicleForm = {
    Vendor: {
      VendorType: '',
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Salesman: '',
      TradeMeUrl: ''
    },
    FiancedVehicles: [
      {
        PurchaseType: '',
        Price: '',
        Condition: '',
        Imported: '',
        Year: '',
        Make: '',
        Model: '',
        EngineSize: '',
        Colour: '',
        Registration: '',
        MilageUnit: '',
        Milage: '',
        VehicleIdentificationNumber: '',
        VehicleType: ''
      }
    ],
    TradeInVehicles: [
      {
        Year: '',
        Make: '',
        Model: '',
        Registration: '',
        MilageUnit: '',
        Milage: '',
        TradeInValue: '',
        SettlementValue: '',
        Balance: '',
        ValidTo: '',
        NetValue: ''
      }
    ],
    FinancialDetail: {

    }
  };

  constructor() { }

  ngOnInit() {
  }

  updateVendor(receivedValue) {
    this.vehicleForm.Vendor = receivedValue;
    console.log('Current Vendor details', this.vehicleForm.Vendor);
  }

  updateFinancedVehicle (receivedValue) {
    // this.vehicleForm.
    console.log('Finance Vehicle received value', receivedValue);
  }

  updateTradeInVehicle (receivedValue) {
    console.log('Trade In Vehicle received value', receivedValue);
  }

  updateFinanceDetails (receivedValue) {
    console.log('Trade In Vehicle received value', receivedValue);
  }
}
