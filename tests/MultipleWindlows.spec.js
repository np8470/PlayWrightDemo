const {test, expect} = require('@playwright/test')

test('New browser window', async({browser}) => {
    const browserContext = await browser.newContext()
    const pageContext = await browserContext.newPage()
    await pageContext.goto('https://vinothqaacademy.com/multiple-windows/')

    const [newPage] = await Promise.all(
        [
            browserContext.waitForEvent('page'),
            pageContext.locator("xpath=//button[@id='button1'][contains(.,'New Browser Window')]").click()
            
        ]
    )

    console.log('A new window has been opened.')
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log('New window title: ', title)
    await expect(newPage).toHaveTitle('Demo Site - WebTable - Vinoth Q.A Academy')
    await newPage.close()

    await pageContext.close()
})

test('New Message Window', async({browser}) => {
    const browserContext = await browser.newContext()
    const pageContext = await browserContext.newPage()
    await pageContext.goto('https://vinothqaacademy.com/multiple-windows/')

    const [newPage] = await Promise.all(
        [
            browserContext.waitForEvent('page'),
            pageContext.locator("xpath=//button[@id='button1'][contains(.,'New Message Window')]").click()
        ]
    )
    console.log('A new message window has been opened.')
    await newPage.waitForLoadState()
    const newTabMessage = newPage.locator("xpath=//body[contains(.,'Welcome to Vinoth Q. A Academy. Happy Learning')]")
    await expect(newTabMessage).toBeVisible()
    await newPage.close()

    await pageContext.close()
})

test('New Browser Tab', async({browser}) => {
    const browserContext = await browser.newContext()
    const pageContext = await browserContext.newPage()
    await pageContext.goto('https://vinothqaacademy.com/multiple-windows/')

    const [newPage] = await Promise.all(
        [
            browserContext.waitForEvent('page'),
            pageContext.locator("xpath=//button[@id='button1'][contains(.,'New Browser Tab')]").click()
        ]
    )
    console.log('A new window tab has been opened.')
    await newPage.waitForLoadState()
    console.log('New Tab Title: ', await newPage.title())
    await expect(newPage).toHaveTitle('Demo Site - WebTable - Vinoth Q.A Academy')
    await newPage.close()

    await pageContext.close()

})