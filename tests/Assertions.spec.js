const {test, expect }= require('@playwright/test');
const exp = require('constants');

test('Test Assertions', async({page})=>{

    //open the page
    await page.goto('https://demo.nopcommerce.com/register');

    // asserging page URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // asserging page title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // asserting if locator is visible
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // asserting if the element is Enabled
    const searchbox = await page.locator('#small-searchterms')
    await expect(searchbox).toBeEnabled()

    // asseting radio/checkbox 
    //radio button
    const radioButton=await page.locator('#gender-male')
    radioButton.click();
    await expect(radioButton).toBeChecked()

    // checkbox
    const checkbox1 = await page.locator('#Newsletter')
    await expect(checkbox1).toBeChecked;

    // Asserting the expected attribute in the element
    const registrationButton= await page.locator('#register-button')
    await expect(registrationButton).toHaveAttribute('type', 'submit')

    // Asserting to have text
    const haveText = await page.locator(".page-title h1")
    await expect(haveText).toHaveText('Register')

    // Asserting to contain text
    const containText = await page.locator(".page-title h1")
    await expect(containText).toContainText('Regi')

    // Assertion for to have value
    const emailInput=await page.locator('#Email')
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com')
    
    // Assertion to check nubmer of items in the element
    const dateOfMonth= await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(dateOfMonth).toHaveCount(13)


})