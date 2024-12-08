const{test, expect} = require('@playwright/test')
const testdata = JSON.parse(JSON.stringify(require("../multipleuser.json")))


test.describe('Data driven Login test', function() {
    for(const data of testdata)
    {
        test.describe(`Login with differnt users with id ${data.id}`, function() {
            test('Login to Swag Labs application', async({page}) => {
                await page.goto('https://www.saucedemo.com/')
                const userName = await page.locator('#user-name')
                await userName.fill(data.username)
                const password = await page.locator('#password')
                await password.fill(data.password)
                const loginButton = page.locator('#login-button')
                await loginButton.click()
            
                await expect(page).toHaveTitle(data.title)
                await expect(page).toHaveURL(data.inventoryUrl)
            })
        })
    }
})
