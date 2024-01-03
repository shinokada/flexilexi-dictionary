import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Norsk ordbok');
});

test('English page has expected h1', async ({ page }) => {
	await page.goto('/english');
	expect(await page.textContent('h1')).toBe('English dictionary');
});

test('Japanese page has expected h1', async ({ page }) => {
	await page.goto('/japanese');
	expect(await page.textContent('h1')).toBe('Japanese dictionary');
});
