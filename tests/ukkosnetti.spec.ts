import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://ukkosnetti.fi/');
});

test.describe('Ukkosnetti - Portal', () => {
  test('has links to other sites', async ({ page }) => {
    await expect(page).toHaveTitle(/Ukkosnetti - Portal/);
  
    await expect(page.locator('#sitesContainer .site a')).toHaveCount(16);
  });

  test('clicking link redirects to other site', async ({ page }) => {
    await page.locator('#sitesContainer .site a').nth(0).click();

    await expect(page).toHaveTitle(/Tribetron/);
  })
});
