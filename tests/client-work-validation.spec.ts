import { test, expect, chromium } from '@playwright/test';

test('Verify Client Work page is accessible', async () => {
  // Launch the Chrome browser
  const browser = await chromium.launch({ headless: false }); // Set headless to false for visual debugging
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Navigate to website
    console.log('Navigating to https://www.epam.com/');
    await page.goto('https://www.epam.com/');
    
    // Select "Services" from the header menu
    console.log('Clicking on "Services" in the header menu');
    await page.click('text=Services');
    
    // Click "Explore Our Client Work" link
    console.log('Clicking on "Explore Our Client Work" link');
    await page.click('text=Explore Our Client Work');
    
    // Verify the "Client Work" text is visible
    console.log('Verifying "Client Work" text is visible');
    const clientWorkText = await page.locator('text=Client Work');
    await expect(clientWorkText).toBeVisible();
    
    console.log('Test executed successfully!');
  } catch (error) {
    console.error('Test execution failed:', error);
    throw error; // Rethrow for further logging
  } finally {
    // Close browser
    await browser.close();
  }
});