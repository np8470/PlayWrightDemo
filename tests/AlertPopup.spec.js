const{test, expect} = require('@playwright/test')
let page;
test.beforeEach('Launch the app', async({browser}) => {
    page = await browser.newPage()
    await page.goto('https://vinothqaacademy.com/alert-and-popup/')
 })

test('Alert Box', async() => {
    const alertBoxButton = page.locator("xpath=//button[normalize-space()='Alert Box']")
    await alertBoxButton.click()
    page.on('dialog', async dialog => dialog.accept())
})

test('Confirm Alert Box', async() => {
    const confirmAlertBoxButton = page.locator("xpath=//button[normalize-space()='Confirm Alert Box']")
    await confirmAlertBoxButton.click()
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`)
        await dialog.dismiss();

    })
})

test('Prompt Alert Box', async() => {
    const promptAlertButton = page.locator("xpath=//button[normalize-space()='Prompt Alert Box']")
    await promptAlertButton.click()
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`)
        await dialog.accept('Yes');
    })
})