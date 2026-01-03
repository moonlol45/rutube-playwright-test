import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLoactor: Locator;
  private readonly categoriesTabLoator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLoactor = this.page.getByRole('banner');
    this.categoriesTabLoator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLoactor).toMatchAriaSnapshot();
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLoator).toMatchAriaSnapshot();
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
