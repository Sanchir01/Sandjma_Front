import { test } from '@playwright/test'
require('dotenv').config()

test('test', async ({ page }) => {
	await page.goto(
		process.env.NODE_ENV === 'production'
			? (process.env.CLIENT_URL as string)
			: 'http://localhost:3000/'
	)
	await page.getByRole('button', { name: 'Переключатель темы' }).click()
	await page.getByRole('menuitem', { name: 'Тёмная' }).click()
	await page.getByRole('button', { name: 'Переключатель темы' }).click()
	await page.getByRole('menuitem', { name: 'Светлая' }).click()
	await page.getByRole('link', { name: 'Sandjma 22-23' }).first().click()
	await page.getByRole('banner').getByRole('link').nth(3).click()
	await page.getByRole('link', { name: 'каталог' }).click()
	await page.getByRole('combobox').click()
	await page.getByText('Возростанию цены').click()
	await page.getByRole('combobox').click()
	await page.getByText('Убыванию цены').click()
	await page.getByRole('combobox').click()
	await page.getByText('Убыванию алфавита').click()
	await page.getByRole('combobox').click()
	await page.getByText('Возростания алфавита').click()
	await page.locator('.Catalog_catalog__filters__rVW8J > svg').click()
	await page.locator('button').filter({ hasText: 'выберите категорию' }).click()
	await page.getByLabel('Футболки').click()
	await page.locator('button').filter({ hasText: 'Футболки' }).click()
	await page.locator('.fixed').first().click()
	await page.locator('button').filter({ hasText: 'выберите цвет' }).click()
	await page.getByLabel('белый').click()
	await page
		.locator('button')
		.filter({ hasText: 'выберите толщину одежды' })
		.click()
	await page.getByLabel('Двухнитка').click()
	await page.getByRole('button', { name: 'Применить фильтры' }).click()
	await page.getByRole('main').getByRole('img').first().click()
	await page.getByRole('button', { name: 'Сбросить фильтры' }).click()
	await page
		.locator('article')
		.filter({ hasText: 'Худи Черная4000' })
		.getByLabel('Add to favorites')
		.click()
	await page.getByRole('link', { name: '1', exact: true }).click()
	await page.getByRole('link', { name: 'каталог' }).click()
	await page
		.locator('article')
		.filter({ hasText: 'Худи Черная4000' })
		.getByLabel('Add to favorites')
		.click()
	await page.getByRole('link', { name: 'https://i.ibb.co/QcLG52L/' }).click()
	await page
		.locator('div')
		.filter({ hasText: /^Футболка с альчиками1000 ₽XLLSдобавить в корзину$/ })
		.locator('span')
		.nth(1)
		.click()
	await page.locator('span').nth(2).click()
	await page.getByRole('button', { name: 'добавить в корзину' }).click()
	await page.getByRole('button', { name: 'L', exact: true }).click()
	await page.getByRole('button', { name: 'добавить в корзину' }).click()
	await page.getByRole('button', { name: 'S', exact: true }).click()
	await page.getByRole('button', { name: 'добавить в корзину' }).click()
	await page.getByText('3').click()
	await page.getByRole('button', { name: 'оформить заказ' }).click()
	await page.getByRole('banner').getByRole('link').nth(3).click()
	await page
		.locator('div')
		.filter({ hasText: /^3Переключатель темы$/ })
		.getByRole('img')
		.nth(4)
		.click()
	await page.locator('html').click()
	await page.getByRole('list').getByRole('link', { name: 'О бренде' }).click()
	await page.getByRole('banner').getByRole('link').nth(3).click()
	await page.getByText('3', { exact: true }).click()
	await page.getByRole('button', { name: 'оформить заказ' }).click()
	await page.getByPlaceholder('Введите номер телефона').click()
	await page
		.getByPlaceholder('Введите номер телефона')
		.fill('+7 (e___) ___ __ __')
	await page.getByPlaceholder('Введите номер телефона').click()
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page.getByPlaceholder('Введите номер телефона').press('ArrowLeft')
	await page
		.getByPlaceholder('Введите номер телефона')
		.fill('+7 (937) 465 56 89_')
	await page.getByPlaceholder('Введите пароль').click()
	await page.getByPlaceholder('Введите пароль').fill('test01')
	await page.getByRole('button', { name: 'Войти' }).click()

	await page.getByRole('banner').getByRole('link').nth(3).click()
})
