const {test, expect} = require('@playwright/test')

test.describe('Authentication', ()=> {

    test('Capture User Session', async({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByPlaceholder('Username').fill('Admin')
        await page.getByPlaceholder('Password').fill('admin123')
        await page.locator('button').click()
        const dashboard = page.locator("//h6")
        await expect(dashboard).toHaveText('Dashboard')
        await page.context().storageState({path: "UserSession.json"})
    })

    test('Authenticate using already captured User Session', async({browser}) => {
        const browserContext = browser.newContext({storageState: "UserSession.json"})
        const pageContext = await (await browserContext).newPage()
        await pageContext.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const dashboard = pageContext.locator("//h6")
        await expect(dashboard).toHaveText('Dashboard')
    })
})