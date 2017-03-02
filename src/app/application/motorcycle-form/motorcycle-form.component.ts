import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycle-form',
  templateUrl: './motorcycle-form.component.html',
  styleUrls: ['./motorcycle-form.component.css']
})
export class MotorcycleFormComponent implements OnInit {

  private motorcycleForm = {
    Vendor: {

    },
    FiancedMotorcycles: [
      {

      }
    ],
    TradeInMotorcycles: [
      {

      }
    ],
    FinancialDetail: {

    }
  };

  constructor() { }

  ngOnInit() {
  }

  updateMotorcycleForm(event) {

  }

}
