import { FinanceWebUiPage } from './app.po';

describe('finance-web-ui App', function() {
  let page: FinanceWebUiPage;

  beforeEach(() => {
    page = new FinanceWebUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('finance-web-ui works!');
  });
});
