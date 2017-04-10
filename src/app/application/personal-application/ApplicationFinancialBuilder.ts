
import { ApplicationFinancial } from "app/application/personal-application/personal-application";

export class ApplicationFinancialBuilder {
  public BuildAssets() : Array < ApplicationFinancial >{
    return [
      {
          OptionName: 'Home',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Home Contents',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Car',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Bank',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Investments',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Kiwisaver',
          Note: '',
          Value: 0
        }
    ];
  }

  public BuildLiabilities() : Array < ApplicationFinancial >{
    return [
        {
          OptionName: 'Mortgage',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Hire Purchase',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Loan',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Credit Card',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Bank Overdraft',
          Note: '',
          Value: 0
        }
    ];
  }

  public BuildIncome() : Array < ApplicationFinancial >{
    return [
        {
          OptionName: 'Take Home Pay',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Secondary Income',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Spouse Take Home Pay',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Spouse Secondary Income',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Government Subsidy',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Other',
          Note: '',
          Value: 0
        }
    ];
  }

  public BuildExpenses() : Array < ApplicationFinancial >{
    return [
        {
          OptionName: 'Mortgage',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Hire Purchase',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Loan',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Credit Card',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Miscellaneous',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Rates',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Phone',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Power',
          Note: '',
          Value: 0
        },
        {
          OptionName: 'Other',
          Note: '',
          Value: 0
        }
    ];
  }
}