import { NatoursPage } from './app.po';

describe('natours App', () => {
  let page: NatoursPage;

  beforeEach(() => {
    page = new NatoursPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
