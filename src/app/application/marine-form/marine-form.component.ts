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
