import { AngularCliAppPage } from './app.po';

describe('finance-web-ui App', function() {
  let page: AngularCliAppPage;

  beforeEach(() => {
    page = new AngularCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('finance-web-ui works!');
  });
});
