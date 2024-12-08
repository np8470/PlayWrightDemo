const{test, expect} = require('@playwright/test')

test('Launch App', async({browser}) => {
    const browserContext = await browser.newContext()
    const pageContext = await browserContext.newPage()
    await pageContext.goto('https://vinothqaacademy.com/demo-site/')
    const pageTitle = await pageContext.title()
    console.log('Page Title : ',pageTitle)
    await expect(pageContext).toHaveTitle('Demo Site - Registration Form - Vinoth Q.A Academy')

    const tutorialsLinkElement = pageContext.locator("xpath=//div[@class='collapse navbar-collapse pull-right']//a[normalize-space()='Tutorials']")
    await tutorialsLinkElement.click()

    await pageContext.goBack()
    await pageContext.goForward()
    await pageContext.reload()
})
