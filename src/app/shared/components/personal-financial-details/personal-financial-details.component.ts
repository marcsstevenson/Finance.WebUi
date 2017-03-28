import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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

  private assetsTotal = 0;
  private liabilitiesTotal = 0;
  private netWorth = 0;

  private incomeTotal = 0;
  private expensesTotal = 0;
  private disposableIncome = 0;

  constructor() {}

  ngOnInit() {}

  updateAssetsInputProperty(property, $event) {
    this.assets[property] = $event.target.value;
    console.log('I am sending update to parent');
    this
      .assetsChange
      .emit(this.assets);
  }

  updateIncomeInputProperty(property, $event) {
    this.income[property] = $event.target.value;
    console.log('I am sending update to parent');
    this
      .incomeChange
      .emit(this.income);
  }

  updateLiabilitiesInputProperty(property, $event) {
    this.income[property] = $event.target.value;
    console.log('I am sending update to parent');
    this
      .incomeChange
      .emit(this.income);
  }

  updateExpensesInputProperty(property, $event) {
    this.income[property] = $event.target.value;
    console.log('I am sending update to parent');
    this
      .incomeChange
      .emit(this.income);
  }

  addAsset() {
    this
      .assets
      .push({OptionName: 'Asset Name', Value: 0, Note: ''});
  }

  assetOnKeypress(event: any){
    if(event && event.code === 'Enter')
      this.addAsset();
  }

  addLiability() {
    this
      .liabilities
      .push({OptionName: 'Liability Name', Value: 0, Note: ''});
  }

  liabilityOnKeypress(event: any){
    if(event && event.code === 'Enter')
      this.addLiability();
  }

  addIncome() {
    this
      .income
      .push({OptionName: 'Income Name', Value: 0, Note: ''});
  }

  incomeOnKeypress(event: any){
    if(event && event.code === 'Enter')
      this.addIncome();
  }

  addExpense() {
    this
      .expenses
      .push({OptionName: 'Expense Name', Value: 0, Note: ''});
  }

  expensesOnKeypress(event: any){
    if(event && event.code === 'Enter')
      this.addExpense();
  }

  // I could refactor and make all updates to one method. But that might be
  // confusing for future people work on this. To improve the readability, I
  // decide to make it less DRY for future benefits.
  updateAssetsOptionName(index, $event) {
    this.assets[index].OptionName = $event.target.value;
    console.log('I am sending update to parent');
    this
      .assetsChange
      .emit(this.assets);
  }

  updateAssetsNote(index, $event) {
    this.assets[index].Note = $event.target.value;
    console.log('I am sending update to parent');
    this
      .assetsChange
      .emit(this.assets);
  }

  updateAssetsValue(index, $event) {
    this.assets[index].Value = parseInt($event.target.value, 10);

    this.calculateTotalAssets();
    this.calculateNetWorth();

    console.log('I am sending update to parent');
    this
      .assetsChange
      .emit(this.assets);
  }

  // has assumption that all the Value are number and initiated with value 0
  calculateTotalAssets() {
    this.assetsTotal = this
      .assets
      .reduce((a, b) => {
        return a + b.Value;
      }, 0);
  }

  updateLiabilitiesOptionName(index, $event) {
    this.liabilities[index].OptionName = $event.target.value;
    console.log('I am sending update to parent');
    this
      .liabilitiesChange
      .emit(this.liabilities);
  }

  updateLiabilitiesNote(index, $event) {
    this.liabilities[index].Note = $event.target.value;
    console.log('I am sending update to parent');

    this
      .liabilitiesChange
      .emit(this.liabilities);
  }

  updateLiabilitiesValue(index, $event) {
    this.liabilities[index].Value = parseInt($event.target.value, 10);
    console.log('I am sending update to parent');

    this.calculateTotalLiabilities();
    this.calculateNetWorth();

    this
      .liabilitiesChange
      .emit(this.liabilities);
  }

  // has assumption that all the Value are number and initiated with value 0
  calculateTotalLiabilities() {
    this.liabilitiesTotal = this
      .liabilities
      .reduce((a, b) => {
        return a + b.Value;
      }, 0);
  }

  calculateNetWorth() {
    this.netWorth = this.assetsTotal - this.liabilitiesTotal;
  }

  updateIncomeOptionName(index, $event) {
    this.income[index].OptionName = $event.target.value;
    console.log('I am sending update to parent');
    this
      .incomeChange
      .emit(this.income);
  }

  updateIncomeNote(index, $event) {
    this.income[index].Note = $event.target.value;
    console.log('I am sending update to parent');
    this
      .incomeChange
      .emit(this.income);
  }

  updateIncomeValue(index, $event) {
    this.income[index].Value = parseInt($event.target.value, 10);
    console.log('I am sending update to parent');

    this.calculateTotalIncome();
    this.calculateDisposableIncome();

    this
      .incomeChange
      .emit(this.income);
  }

  // has assumption that all the Value are number and initiated with value 0
  calculateTotalIncome() {
    this.incomeTotal = this
      .income
      .reduce((a, b) => a + b.Value, 0);
  }

  updateExpensesOptionName(index, $event) {
    this.expenses[index].OptionName = $event.target.value;
    console.log('I am sending update to parent');
    this
      .expensesChange
      .emit(this.expenses);
  }

  updateExpensesNote(index, $event) {
    this.expenses[index].Note = $event.target.value;
    console.log('I am sending update to parent');
    this
      .expensesChange
      .emit(this.expenses);
  }

  updateExpensesValue(index, $event) {
    this.expenses[index].Value = parseInt($event.target.value, 10);
    console.log('I am sending update to parent');

    this.calculateTotalExpenses();
    this.calculateDisposableIncome();

    this
      .expensesChange
      .emit(this.expenses);
  }

  // has assumption that all the Value are number and initiated with value 0
  calculateTotalExpenses() {
    this.expensesTotal = this
      .expenses
      .reduce((a, b) => {
        return a + b.Value;
      }, 0);
  }

  calculateDisposableIncome() {
    this.disposableIncome = this.incomeTotal - this.expensesTotal;
  }
}
