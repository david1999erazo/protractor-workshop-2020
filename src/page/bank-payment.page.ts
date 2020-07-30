import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
