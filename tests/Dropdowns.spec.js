const {test, expect}=require('@playwright/test')

test('Handling Dropdowns', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select option from dropdown

    // await page.locator('#country').selectOption({label:'Germany'});
    await page.locator('#country').selectOption('Germany');
    // await page.locator('#country').selectOption({value:'uk'});
    // await page.locator('#country').selectOption({index:1});
    // await page.selectOption('#country', 'Germany');

    //Assertions
    //1) Check number of the option in the dropdown
    // const options= await page.locator('#country option');
    // await expect(options).toHaveCount(10)

    //2) Check number of the option in the dropdown
    // const options= await page.$$('#country option');
    // console.log("Number of options: ", options.length)
    // await expect(options.length).toBe(10)

    //3) Checking the presence of the option in the dropdown
    // const content=await page.locator('#country').textContent()
    // await expect(content.includes('Germany')).toBeTruthy();

    //4) Checking the presence of the option in the dropdown with using the loop

    const options= await page.$$('#country option');
let status = false;

for(const option of options){

    // console.log(await option.textContent())

    if((await option.textContent()).includes('France')){
        status=true
        break;

    }
}

expect(status).toBeTruthy;
    await page.waitForTimeout(5000);

})