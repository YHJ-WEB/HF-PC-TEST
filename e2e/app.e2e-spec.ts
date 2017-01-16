import { HFCTESTPage } from './app.po';

describe('hf-c-test App', function() {
  let page: HFCTESTPage;

  beforeEach(() => {
    page = new HFCTESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
