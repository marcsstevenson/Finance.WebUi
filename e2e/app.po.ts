export class AngularCliAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('finance-web-ui-app h1')).getText();
  }
}
