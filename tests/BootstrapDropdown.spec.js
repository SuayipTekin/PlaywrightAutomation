const { test, expect } = require("@playwright/test");

test("Multi Select Dropdown", async ({ page }) => {
  await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click();

  //1
  //   const options = page.locator('ul>li label input')
  //   await expect(options).toHaveCount(11)

  //2
  //   const options = page.$$('ul>li label input')
  //   await expect((await options).length).toBe(11)

  //2 select multiple option from the dropdown
  const options = await page.$$("ul>li label");
  for (let option of options) {
    const value = await option.textContent();
    // console.log("The vlue is ", value);
    if(value.includes('Angular')){
        await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
