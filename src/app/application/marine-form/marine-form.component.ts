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
    FinancedMotors: [
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
    FinancedTrailers: [
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

  updateFinancedMarine(receivedValue) {
    this.marineForm.Vendor = receivedValue;
    console.log('Current Vendor details', this.marineForm.Vendor);
  }

  updateTradeInMarine(receivedValue) {
    this.marineForm.TradeInMarines = receivedValue;
    console.log('Current Vendor details', this.marineForm.TradeInMarines);
  }

  updateMarineTrailer(receivedValue) {
    this.marineForm.FinancedTrailers = receivedValue;
    console.log('Current Vendor details', this.marineForm.FinancedTrailers);
  }

  updateMarineForm(receivedValue) {
    this.marineForm.FinancialDetail = receivedValue;
    console.log('Current Vendor details', this.marineForm.Vendor);
  }

}
