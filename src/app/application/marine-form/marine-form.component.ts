import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marine-form',
  templateUrl: './marine-form.component.html',
  styleUrls: ['./marine-form.component.css']
})
export class MarineFormComponent implements OnInit {

  private marineForm = {
    Vendor: {

    },
    FiancedMarines: [
      {
        Price: '',
        Condition: '',
        Year: '',
        Make: '',
        Model: '',
        HullSerialNumber: '',
        Motor: {
          Price: '',
          Condition: '',
          Make: '',
          Model: '',
          EngineSize: '',
          EngineSerialNumber: ''
        }
      }
    ],
    TradeInMarines: [
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
