import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycle-form',
  templateUrl: './motorcycle-form.component.html',
  styleUrls: ['./motorcycle-form.component.css']
})
export class MotorcycleFormComponent implements OnInit {

  private motorcycleForm = {
    Vendor: {
      VendorType: '',
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Salesman: '',
      TradeMeUrl: ''
    },
    FiancedMotorcycles: [
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
        MotorcycleType: ''
      }
    ],
    TradeInMotorcycles: [
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

  updateFinancedMotorcycle(receivedValue) {

  }

  updateTradeInMotorcycle(receivedValue) {

  }

  updateFinanceDetails(receivedValue) {

  }

}
