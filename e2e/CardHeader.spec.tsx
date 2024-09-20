import { test, expect } from '@playwright/test'
import { CardHeader } from '@/components/atoms/CardHeader/CardHeader'

test('Spec CardHeader', async ({ page }) => {
  expect(CardHeader).toBeTruthy()
})
