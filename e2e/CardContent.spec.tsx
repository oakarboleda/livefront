import { test, expect } from '@playwright/test'
import { CardContent } from '@/components/atoms/CardContent/CardContent'

test('Spec CardContent', async ({ page }) => {
  expect(CardContent).toBeTruthy()
})
