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

  public async login(email:string, pwd:string): Promise<void> {
    await this.emailTF.sendKeys(email);
    await this.pwdTF.sendKeys(pwd);
    await this.submitBtn.click();
  }
}
