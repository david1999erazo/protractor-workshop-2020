import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCardButton: ElementFinder;

  constructor () {
    this.addToCardButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addToCart(): Promise<void> {
    await this.addToCardButton.click();
  }
}
