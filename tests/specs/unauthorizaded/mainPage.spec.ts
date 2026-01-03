import test, { expect } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности эллементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности эллементов табов категорий ', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});
test('Проверка доступности бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapshot();
});
