import { DescansaPage } from './app.po';

describe('descansa App', () => {
  let page: DescansaPage;

  beforeEach(() => {
    page = new DescansaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
