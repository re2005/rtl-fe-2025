/// <reference types="vitest" />
/// <reference types="playwright" />

import { test, expect } from '@playwright/test';

test.describe('Sports News Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Should render the header', async ({ page }) => {
    const listComponent = await page.$('header h1');
    expect(listComponent).not.toBeNull();
    const headerText = await listComponent?.innerText();
    expect(headerText).toBe('Sports News');
  });
  
  test('Should render the UiList component', async ({ page }) => {
    const listItems = await page.$$('ul[data-testid="ui-list"] > li');
    expect(listItems.length).toBe(12);

    const firstItem = listItems[0];
    const firstItemLink = await firstItem.$('a');
    expect(firstItemLink).not.toBeNull();
    const firstItemLinkHref = await firstItemLink?.getAttribute('href');
    expect(firstItemLinkHref).toContain('https://redactie.rtl.nl');
    
    const firstItemTitle = await firstItem.$('h3');
    expect(firstItemTitle).not.toBeNull();
  });

});