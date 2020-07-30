import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutbutton: ElementFinder;

  constructor () {
    this.checkoutbutton = $('#center_column > form > p > button > span');
  }

  public async goToCheckOut(): Promise<void> {
    await this.checkoutbutton.click();
  }
}
