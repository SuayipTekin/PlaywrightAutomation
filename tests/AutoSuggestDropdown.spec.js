const { test, expect } = require("@playwright/test");

test("Auto Suggest Dropdown", async ({ page }) => {
  await page.goto("https://www.expedia.com/");

  await page.locator("//span[normalize-space()='Flights']").click();
  await page.locator("//button[@aria-label='Leaving from']").click();
  //   await page.locator("#origin_select").fill("ch");
  await page.fill("#origin_select", "chi");
  await page.waitForSelector("strong");

  const departures = await page.$$("strong");
  for (let departure of departures) {
    const value = await departure.textContent();
    console.log(value);
    if(value.includes('OHare Intl.')){
        await departure.click();
        break;
    }
  }
  await page.waitForTimeout(5000);
});
