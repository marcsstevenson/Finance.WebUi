import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-personal-financial-details',
  templateUrl: './personal-financial-details.component.html',
  styleUrls: ['./personal-financial-details.component.scss']
})
export class FinanceWebUiPersonalFinancialDetailsComponent implements OnInit {

  @Input()
  assets;

  @Output()
  assetsChange = new EventEmitter();

  @Input()
  liabilities;

  @Output()
  liabilitiesChange = new EventEmitter();

  @Input()
  income;

  @Output()
  incomeChange = new EventEmitter();

  @Input()
  expenses;

  @Output()
  expensesChange = new EventEmitter();

  private NetWorth = 0;
  private DisposableIncome = 0;

  constructor() { }

  ngOnInit() {
  }

  updateAssetsInputProperty(property, $event) {
    this.assets[property] = $event.target.value;
    console.log('I am sending update to parent');
    this.assetsChange.emit(
      this.assets
    );
  }

  updateIncomeInputProperty(property, $event) {
    this.income[property] = $event.target.value;
    console.log('I am sending update to parent');
    this.incomeChange.emit(
      this.income
    );
  }

  updateLiabilitiesInputProperty(property, $event) {
    this.income[property] = $event.target.value;
    console.log('I am sending update to parent');
    this.incomeChange.emit(
      this.income
    );
  }

  updateExpensesInputProperty(property, $event) {
    this.income[property] = $event.target.value;
    console.log('I am sending update to parent');
    this.incomeChange.emit(
      this.income
    );
  }

  addAsset() {
    this.assets.push({
      OptionName: 'Asset Name',
      Value: '',
      Note: ''
    });
  }
}
