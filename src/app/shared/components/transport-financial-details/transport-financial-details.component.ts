import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-transport-financial-details',
  templateUrl: 'transport-financial-details.component.html',
  styleUrls: ['transport-financial-details.component.css']
})
export class FinanceWebUiTransportFinancialDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calculateGrossCost () {
    return 0;
  }

  calculateTotalDeposit() {
    return 0;
  }
}
