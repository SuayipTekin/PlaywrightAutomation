const { test, expect } = require("@playwright/test");

test("Multi Select Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select multip option from multi select dropdown
  // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

  //Assertions
  //1) Check number of option
  // const options=await page.locator('#colors option')
  // await expect(options).toHaveCount(5)

  //2) Check number of option
  //   const options = await page.$$("#colors option");
  //   console.log("number of options", options.length )
  //   await expect(options.length).toBe(5);

  //3) Check presence of value in the dropdown
  const content = await page.locator("#colors").textContent();
  await expect(content.includes("Blue")).toBeTruthy();
  await expect(content.includes("Black")).toBeFalsy();

  await page.waitForTimeout(5000);
});
