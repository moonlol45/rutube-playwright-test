import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLoactor: Locator;
  private readonly categoriesTabLoator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationPopupLocator: Locator;
  private readonly autorizationModalLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly chageThemeButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLoactor = this.page.getByRole('banner');
    this.categoriesTabLoator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopupListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationPopupLocator = this.page.locator(
      '.wdp-notifications-nothing-stub-module__wrapper',
    );
    this.autorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.chageThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
  }
  async changeThemeToWhite() {
    await this.chageThemeButtonLocator.click();
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLoactor).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLoator).toMatchAriaSnapshot({
      name: 'categoriesAriaSnapshot.yml',
    });
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuSnapshot.yml' });
  }
  async openAddPopupList() {
    this.headerAddButtonLocator.click();
  }
  async openNotificationPopup() {
    this.headerNotificationButtonLocator.click();
  }
  async openAutorizationModal() {
    this.headerLoginButtonLocator.click();
  }
  async addPopupListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({
      name: 'addButtonPopupList.yml',
    });
  }
  async NotificationPopupHasCorrectAriaShapshot() {
    await expect(this.headerNotificationPopupLocator).toMatchAriaSnapshot({
      name: 'notificationPopup.yml',
    });
  }
  async AutorizationModalHasCorrectAriaShapshot() {
    await expect(this.autorizationModalLocator).toMatchAriaSnapshot({
      name: 'autorizationModal.yml',
    });
  }
  async fullMenuHasCorrectAriaShapshot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({ name: 'fullMenuSnapshot.yml' });
  }
  async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
