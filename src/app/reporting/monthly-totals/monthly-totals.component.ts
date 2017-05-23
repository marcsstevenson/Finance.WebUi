import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import * as moment from 'moment';
import { MonthlyTotalsService } from "app/reporting/monthly-totals/monthly-totals.service";

@Component({
  selector: 'app-MonthlyTotals-detail',
  templateUrl: './monthly-totals.component.html',
  styleUrls: ['./monthly-totals.component.scss'],
  providers: [MonthlyTotalsService]
})
export class MonthlyTotalsComponent implements OnInit {
  //Create a list of months
  private months: Array<any>;
  private selectedMonthValue: number;
  private selectedYearValue: number = moment().year();
  private DealershipProfitReport: any = null;
  private FinanceCompanyProfitReport: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _MonthlyTotalsService: MonthlyTotalsService
  ) { }

  ngOnInit() {
    this.months = Array.apply(0, Array(12)).map(function (_, i) { return { value: i + 1, name: moment().month(i).format('MMMM') } });
    this.selectedMonthValue = this.months[moment().month()].value;

    this.runReport ();
  }

  runReport () {
    this._MonthlyTotalsService.DealershipProfitReport(this.selectedMonthValue, this.selectedYearValue)
      .then((response) => {
        this.DealershipProfitReport = response;
    });

    this._MonthlyTotalsService.FinanceCompanyProfitReport(this.selectedMonthValue, this.selectedYearValue)
      .then((response) => {
        this.FinanceCompanyProfitReport = response;
    });
  }
}