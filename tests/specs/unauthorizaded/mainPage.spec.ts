import { test } from '../../fixtures/fixtures';

test('Проверка доступности эллементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности эллементов табов категорий ', async ({ mainPage }) => {
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});
test('Проверка доступности бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
