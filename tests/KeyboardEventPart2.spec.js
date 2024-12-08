const{test,expect} = require('@playwright/test')

test('Keyboar Event', async({page}) => {
    await page.goto('https://www.google.com/')
    const search = await page.locator("xpath=//textarea[@id='APjFqb']")
    await search.fill('PlayWright')
    await page.keyboard.press('Enter')
    
    await page.goBack()

    await search.fill('PlayWright')
    await page.keyboard.press('Ctrl+A')
    await page.keyboard.press('Backspace')
})

test('Keyboar Event two', async({page}) => {
    await page.goto('https://www.google.com/')
    const search = await page.locator("xpath=//textarea[@id='APjFqb']").focus()
    await search.fill('PlayWright')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Backspace')
})

test('Keyboar Event three', async({page}) => {
    await page.goto('https://www.google.com/')
    const search = await page.locator("xpath=//textarea[@id='APjFqb']")
    await search.fill('PlayWright')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Control+V')
})

test('Keyboar Event four', async({page}) => {
    await page.goto('https://www.google.com/')
    const search = await page.locator("xpath=//textarea[@id='APjFqb']").focus()
    await page.keyboard.type('PlayWright tutorial!')
    //await search.fill('PlayWright tutorial!')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.down('Shift')
    //for (let i = 0; i < 9; i++) {
        for (let i = 0; i < 'tutorial'.length; i++) {
        await page.keyboard.press('ArrowLeft')
    }
    await page.keyboard.up('Shift')
    await page.keyboard.press('Backspace')
})

test('handle Autosuggestions', async({page}) => {
    await page.goto('https://www.google.com/')
    const search = await page.locator("xpath=//textarea[@id='APjFqb']").focus()
    await page.keyboard.type('PlayWright')
    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
})

test('handle Autosuggestions using loop', async({page}) => {
    await page.goto('https://www.google.com/')
    const search = await page.locator("xpath=//textarea[@id='APjFqb']").focus()
    await page.keyboard.type('Playwright')
    await page.waitForSelector("//li[@role='presentation']")
    const elements = await page.$$("//li[@role='presentation']")
    for (let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent()
        if(text.includes('tutorial'))
        {
            await elements[i].click()
            break;
        }
    }
})