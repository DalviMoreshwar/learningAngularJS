import { NgStarterPage } from './app.po';

describe('ng-starter App', function() {
  let page: NgStarterPage;

  beforeEach(() => {
    page = new NgStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
