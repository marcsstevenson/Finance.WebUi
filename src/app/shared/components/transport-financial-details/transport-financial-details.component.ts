import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-transport-financial-details',
  templateUrl: './transport-financial-details.component.html',
  styleUrls: ['./transport-financial-details.component.scss']
})
export class FinanceWebUiTransportFinancialDetailsComponent implements OnInit {

  @Input()
  financialDetail;

  @Output()
  financialDetailChange = new EventEmitter();

  private grossCostTotal;
  private depositTotal;

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('I am sending update to parent');
    this.financialDetailChange.emit(
      this.financialDetail
    );
  }

  updateInputProperty(property, $event) {
    this.financialDetail[property] = parseInt($event.target.value, 10);
    this.calculateGrossCost();
    this.calculateTotalDeposit();
    this.calculateAmountFinanced();
    this.update();
  }

  calculateGrossCost () {
    this.grossCostTotal = (this.financialDetail.CashPrice || 0) +
             (this.financialDetail.OnRoadCosts || 0) +
             (this.financialDetail.MechanicalWarranty || 0) +
             (this.financialDetail.Gap || 0) +
             (this.financialDetail.Insurance || 0) +
             (this.financialDetail.LoanProtection || 0) +
             (this.financialDetail.BookingFee || 0) +
             (this.financialDetail.BrokerFee || 0) +
             (this.financialDetail.Other || 0);

  }

  calculateTotalDeposit() {
    this.depositTotal = (this.financialDetail.CashDepositOrAdvanceRental || 0) +
                        (this.financialDetail.NetTrade || 0);
  }

  calculateAmountFinanced() {
    this.financialDetail.AmountFinanced = this.grossCostTotal - this.depositTotal;
  }
}
