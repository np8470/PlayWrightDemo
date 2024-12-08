const {test, expect} = require('@playwright/test')

test.beforeEach('Launch URL', async({page}) => {
    await page.goto('https://vinothqaacademy.com/drop-down/')
})

/* priority to use option
*   label
*   value
*   index
*/
test('Handle Mutil dropdown', async({page}) => {
    //await page.goto('https://vinothqaacademy.com/drop-down/')
    const progLanguages = page.locator("select[name='programming']")
    await progLanguages.selectOption(['JAVA','JAVASCRIPT','C#'])
    await expect(progLanguages).toHaveValues(['JAVA','JAVASCRIPT','C#'])
})

test('Handle Dynamic dropdown', async({page}) => {
    //await page.goto('https://vinothqaacademy.com/drop-down/')
    const accountElement = page.locator('#FromAccount')
    await accountElement.selectOption('NRI') // 8400045 Bal - $8,758.78
    //await accountElement.selectOption({label:'8400045 Bal - $8,758.78'})
    //await accountElement.selectOption({index:3})
    await expect(accountElement).toHaveValue('NRI')
})

test('Simple dropdown', async({page}) => {
    //await page.goto('https://vinothqaacademy.com/drop-down/')
    const cityElement = page.locator('#simpleDropdown')
    const cityValue='SG' //Singapore
    await cityElement.selectOption(cityValue)
    await expect(cityElement).toHaveValue(cityValue)

    // print all dropdown values
    let city = await page.$('#simpleDropdown')
    let allCity = await city.$$('option')
    for (let i = 0; i < allCity.length; i++) {
        const element = allCity[i];
        const value = element.textContent()
        console.log('Value from city dropdown: ',value);
    }

})