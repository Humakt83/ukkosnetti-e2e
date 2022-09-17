import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://ukkosnetti.fi/tribetron');
});

test.describe('Tribetron', () => {
  test('main page with four buttons', async ({ page }) => {
    await expect(page).toHaveTitle(/Tribetron/);
  
    await expect(page.locator('.btn').nth(0)).toHaveText('New Campaign');
    await expect(page.locator('.btn').nth(1)).toHaveText('New Rumble');
    await expect(page.locator('.btn').nth(2)).toHaveText('Load Game');
    await expect(page.locator('.btn').nth(3)).toHaveText('Help');
  });

  test('start New Campaign', async ({ page }) => {
    await page.locator('.btn').nth(0).click();
    await page.locator('#nameOfPlayer').fill('ukkosnetti-e2e');
    await page.locator('#teamOfPlayer').fill('e2e tests');
    await page.locator('.modal-body button').nth(1).click();

    await expect(page.locator('.player-info h4')).toHaveText('Player: ukkosnetti-e2e');
    await expect(page.locator('.player-info span').nth(0)).toHaveText(/e2e tests/);
  })
});
