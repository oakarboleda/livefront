import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://livefront.vercel.app/')
  await page.getByText('Magic MissileLevel 1Evocation').click()
  await page.getByRole('button', { name: 'Learn more' }).click()
  await page.goto('https://livefront.vercel.app/')
})
