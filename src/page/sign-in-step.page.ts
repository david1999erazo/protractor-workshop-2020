import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailTF: ElementFinder;
  private pwdTF: ElementFinder;
  private submitBtn: ElementFinder;

  constructor () {
    this.emailTF = $('#email');
    this.pwdTF = $('#passwd');
    this.submitBtn = $('#SubmitLogin');
  }

  public async login(): Promise<void> {
    await this.emailTF.sendKeys('aperdomobo@gmail.com');
    await this.pwdTF.sendKeys('WorkshopProtractor');
    await this.submitBtn.click();
  }
}
