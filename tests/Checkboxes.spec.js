const {test, expect} = require('@playwright/test')

test("Handling the chekboxes", async ({page})=>{
    
    // await page.goto("https://demo.nopcommerce.com/register")

    // // single checkbox
    // await page.locator("label[for='Newsletter']").scrollIntoViewIfNeeded();
    // await page.locator("label[for='Newsletter']").check();
    // await expect(await page.locator("label[for='Newsletter']")).toBeChecked();
    // await expect(await page.locator("label[for='Newsletter']").isChecked()).toBeTruthy();

    // await page.waitForTimeout(2000);

    await page.goto("https://app.endtest.io/guides/docs/how-to-test-checkboxes/")

    const checkboxLocators = [
        "//input[@id='pet1']",
        "//input[@id='pet2']",
        "//input[@id='pet3']"
    ];
// selecting multiple checkbox
    for(const locator of checkboxLocators){
        await page.locator(locator).check();
    }

    for(const locator of checkboxLocators){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
        }
    }
})