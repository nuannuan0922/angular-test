import { RunoobTestPage } from './app.po';

describe('runoob-test App', function() {
  let page: RunoobTestPage;

  beforeEach(() => {
    page = new RunoobTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
