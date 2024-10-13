import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	console.log(`Running ${test.info().title}`);
	await page.goto('/');
});

test('index page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Norsk ordbok', level: 1 })).toBeVisible();
});

test('index page has expected meta title', async ({ page }) => {
	await expect(page).toHaveTitle('Flexilexi Dictionary');
});

test('index page has expected meta description', async ({ page }) => {
	const metaDescription = page.locator('meta[name="description"]');
	await expect(metaDescription).toHaveAttribute(
		'content',
		'A flexible dictionary for English, Norwegian, and Japanese.'
	);
});

test('index page has expected meta keywords', async ({ page }) => {
	const metaKeywords = page.locator('meta[name="keywords"]');
	await expect(metaKeywords).toHaveAttribute(
		'content',
		'dictionary, language, learning, norwegian, japanese, english'
	);
});

test('index page has expected meta og', async ({ page }) => {
	const metaOgTitle = page.locator('meta[property="og:title"]');
	await expect(metaOgTitle).toHaveAttribute('content', 'Flexilexi Dictionary');
	const metaOgDescription = page.locator('meta[property="og:description"]');
	await expect(metaOgDescription).toHaveAttribute(
		'content',
		'A flexible dictionary for English, Norwegian, and Japanese.'
	);
	const metaOgUrl = page.locator('meta[property="og:url"]');
	await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
	const metaOgImage = page.locator('meta[property="og:image"]');
	await expect(metaOgImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/flexilexi-dictionary'
	);
});

test('index page has expected meta twitter', async ({ page }) => {
	const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
	await expect(metaTwitterTitle).toHaveAttribute('content', 'Flexilexi Dictionary');
	const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute(
		'content',
		'A flexible dictionary for English, Norwegian, and Japanese.'
	);
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/flexilexi-dictionary'
	);
});
