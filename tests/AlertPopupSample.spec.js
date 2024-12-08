const{test, expect} = require('@playwright/test')
const exp = require('constants')

let page;
test.beforeEach('launch the app', async({browser}) => {
    page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
})

test('Alert Box', async() => {
    page.on('dialog', async(dialogAlert) => {
        expect(dialogAlert.type()).toContain('alert')
        expect(dialogAlert.message()).toContain('I am a JS Alert')
        await dialogAlert.accept()
    })
    await page.locator("//button[normalize-space()='Click for JS Alert']").click()
})

test('Confirm Box', async() => {
    page.on('dialog', async(dialogConfirm) => {
        expect(dialogConfirm.type()).toContain('confirm')
        expect(dialogConfirm.message()).toContain('I am a JS Confirm')
        await dialogConfirm.dismiss()
         //await dialogConfirm.accept()
    })
    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()
    const result = await page.locator('#result')
    expect(result).toContainText('You clicked: Cancel')
    //expect(result).toContainText('You clicked: Ok')
})

test('Prompt Box', async() => {
    page.on('dialog', async(dialogPrompt) => {
        expect(dialogPrompt.type()).toContain('prompt')
        expect(dialogPrompt.message()).toContain('I am a JS prompt')
        await dialogPrompt.accept('Niraj')
        //await dialogPrompt.dismiss('Niraj')
    })
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()
    const result = await page.locator('#result')
    expect(result).toContainText('You entered: Niraj')
    //expect(result).toContainText('You entered: null')
})