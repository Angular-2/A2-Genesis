import { TEEN@HomePage } from './app.po';

describe('teen@home App', function() {
  let page: TEEN@HomePage;

  beforeEach(() => {
    page = new TEEN@HomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
