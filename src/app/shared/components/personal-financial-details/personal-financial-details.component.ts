import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fwui-personal-financial-details',
  templateUrl: 'personal-financial-details.component.html',
  styleUrls: ['personal-financial-details.component.css']
})
export class FinanceWebUiPersonalFinancialDetailsComponent implements OnInit {

  private NetWorth = 0;
  private DisposableIncome = 0;

  constructor() { }

  ngOnInit() {
  }

}
