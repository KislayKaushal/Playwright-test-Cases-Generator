import { test, expect } from '@playwright/test';

test('Verify Client Work page is accessible', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');
  
  // Select "Services" from the header menu
  await page.click('text=Services');
  
  // Click "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  
  // Verify the "Client Work" text is visible
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});

// Additional test for multi-browser support
test.describe('Multi-browser test', () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    test(`Verify Client Work page in ${browserType}`, async ({ browser }) => {
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto('https://www.epam.com/');
      await page.click('text=Services');
      await page.click('text=Explore Our Client Work');

      const clientWorkText = await page.locator('text=Client Work');
      await expect(clientWorkText).toBeVisible();

      await context.close();
    });
  }
});