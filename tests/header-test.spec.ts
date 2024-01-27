import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
	await page.goto('http://localhost:3000/')
	await page.getByRole('button', { name: 'Переключатель темы' }).click()
	await page.getByRole('menuitem', { name: 'Светлая' }).click()
	await page.getByRole('button', { name: 'Переключатель темы' }).click()
	await page.getByRole('menuitem', { name: 'Тёмная' }).click()
	await page.getByRole('button', { name: 'Переключатель темы' }).click()
	await page.getByRole('menuitem', { name: 'Светлая' }).click()
})
