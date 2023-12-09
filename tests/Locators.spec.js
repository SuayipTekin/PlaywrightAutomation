// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locator', async ({page})=>{
    await page.goto("https://demoblaze.com/index.html")
    await page.click('id=login2')

    // provided username with  CSS
    // await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', 'pavanol')

    await page.fill('#loginpassword', 'test@123')

    await page.click("[onclick='logIn()']")

    await expect(await page.locator("//a[normalize-space()='Log out']")).toBeVisible();
})