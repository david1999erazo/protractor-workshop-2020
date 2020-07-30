import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private modalButton: ElementFinder;

  constructor () {
    this.modalButton = $('[style*="display: block;"] .button-container > a');
  }

  public async addedModal(): Promise<void> {
    await this.modalButton.click();
  }
}
