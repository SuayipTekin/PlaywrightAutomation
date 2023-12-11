const {test, expect} = require('@playwright/test')

test('handle radio button', async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register")

   // Handling the radio button
   await page.locator("label[for='gender-male']").check();
    // await page.check("label[for='gender-male']");
    await expect(await page.locator("label[for='gender-male']")).toBeChecked();

    await page.locator("label[for='gender-female']").check();
    // await page.check("label[for='gender-male']");
    await expect(await page.locator("label[for='gender-female']")).toBeChecked();

    await page.waitForTimeout(5000);

})