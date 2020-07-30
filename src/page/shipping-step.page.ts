
import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkbox: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkbox = $('#cgv');
    this.checkoutButton = $('#form > p > button > span');
  }

  public async acceptTermsAndContinue(): Promise<void> {
    await this.checkbox.click();
    await this.checkoutButton.click();
  }
}
