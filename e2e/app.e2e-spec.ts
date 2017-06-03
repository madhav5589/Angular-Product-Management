import { ProductManagementPage } from './app.po';

describe('product-management App', () => {
  let page: ProductManagementPage;

  beforeEach(() => {
    page = new ProductManagementPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
