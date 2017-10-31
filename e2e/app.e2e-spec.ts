import { CandyhuntPage } from './app.po';

describe('candyhunt App', () => {
  let page: CandyhuntPage;

  beforeEach(() => {
    page = new CandyhuntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
