import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private modalButton: ElementFinder;

  constructor () {
    this.modalButton = $('[style*="display: block;"] .button-container > a');
  }

  public async clickProceedToPaymentButton(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.modalButton), 3000);
    await this.modalButton.click();
  }
}
