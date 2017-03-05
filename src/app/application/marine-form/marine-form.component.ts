import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marine-form',
  templateUrl: './marine-form.component.html',
  styleUrls: ['./marine-form.component.css']
})
export class MarineFormComponent implements OnInit {

  private marineForm = {
    Vendor: {
      VendorType: '',
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Salesman: '',
      TradeMeUrl: ''
    },
    FiancedMarines: [
      {
        MarineType: '',
        Price: '',
        Condition: '',
        Year: '',
        Make: '',
        Model: '',
        HullSerialNumber: '',
      }
    ],
    FinancedMotor: [
      {
          Price: '',
          Condition: '',
          Type: '',
          Year: '',
          Make: '',
          Model: '',
          EngineSize: '',
          EngineSerialNumber: ''
        }
    ],
    FinancedTrailer: [
      {
        MarineType: '',
        Type: '',
        Price: '',
        Year: '',
        Registration: '',
        TrailerSerialNumber: ''
      }
    ],
    TradeInMarines: [
      {
        MarineType: '',
        Year: '',
        Make: '',
        Model: '',
        Registration: '',
        EngineSize: '',
        SettlementTo: '',
        Balance: '',
        ValieTo: '',
        NetTradeValue: ''
      }
    ],
    FinancialDetail: {

    }
  };
  constructor() { }

  ngOnInit() {
  }

}
