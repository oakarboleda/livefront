import { test, expect } from '@playwright/test'
import { Footer } from '@/components/molecules/Footer/Footer'

test('Spec Footer', async ({ page }) => {
  expect(Footer).toBeTruthy()
})
