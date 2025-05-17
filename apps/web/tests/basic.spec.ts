import { test, expect } from '@playwright/test'

test('login flow', async ({ page }) => {
  await page.goto('/')
  // TODO: implement full flow
  expect(await page.textContent('body')).toContain('Bienvenue')
})
