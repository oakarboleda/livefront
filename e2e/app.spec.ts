import { test, expect } from '@playwright/test';

test('SpellCard flipping functionality', async ({ page }) => {
  // Navigate to the app
  await page.goto('https://livefront.vercel.app/');

  // Verify the spell card is visible
  const spellCard = page.locator('.relative.perspective-1000').first();

  // Click the spell card to flip it
  await spellCard.click();
  await spellCard.waitFor({ state: 'visible' });

  // Verify that the back side is now visible
  await spellCard.scrollIntoViewIfNeeded();

  const backSide = spellCard.locator('text=Information'); // Scoped to this specific card
  await expect(backSide).toBeVisible();

  // Click the spell card again to flip it back
  await spellCard.click();


  // Verify that the front side is visible again
  await expect(page.locator('text=Magic Missile')).toBeVisible(); // Replace with dynamic spell name if needed
});