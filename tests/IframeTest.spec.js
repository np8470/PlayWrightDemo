const{test, expect} = require('@playwright/test')

test('Ifrmae Handling first approach', async({page}) => {
    await page.goto('https://docs.oracle.com/javase/8/docs/api/')
    const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
    await iframe.locator("//a[text()='java.applet']").click()
})

test('Ifrmae Handling second approach', async({page}) => {
    await page.goto('https://docs.oracle.com/javase/8/docs/api/')
    const iframe = await page.frame('packageListFrame')
    const applet = await iframe.locator("//a[text()='java.applet']")
    await applet.click()
})