import { test, expect } from '@playwright/test'
import { NavBar } from '@/components/molecules/NavBar/NavBar'

test('Spec NavBar', async ({ page }) => {
  expect(NavBar).toBeTruthy()
})
