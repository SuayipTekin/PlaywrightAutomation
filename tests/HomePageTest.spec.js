const {test, expect} = require('@playwright/test')

test('Home Page', async({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    await expect(page).toHaveTitle('STORE');

    await page.close();


})