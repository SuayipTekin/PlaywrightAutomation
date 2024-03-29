const {test, expect} = require('@playwright/test')

test('handle inputbox', async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register")

    //inputbox first name
    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled(); 

    await page.locator("//input[@id='FirstName']").fill("John");
    // await page.fill("//input[@id='FirstName']", "John");
    await page.waitForTimeout(5000);

})