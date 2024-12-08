const {test, expect} = require('@playwright/test')
const { log } = require('console')

test.beforeEach('Launch the app', async({page}) => {
    await page.goto('https://vinothqaacademy.com/iframe/')
})

// maximize broswer window
test.use({viewport:{width:1536,height:864}})

test('First Iframe handle', async({page}) => {
    const allFrames = await page.frames()
    console.log('Number of frames', allFrames.length)

    
    // 1536 × 730
    // 1536 × 864
    console.log('Current window Height: ', await page.viewportSize().height)
    console.log('Current window width: ', await page.viewportSize().width)


    //approach 1 - using the name or url
    //const firstFrame = await page.frame('homepage')
    const firstFrame = await page.frame({url:'https://vinothqaacademy.com/'})
    const firstFrameTitle = await firstFrame.title()
    console.log('First Frame title: ', firstFrameTitle)

    //approach 2 - using the frame locator
    const firstIFrameLocator = page.frameLocator("iframe[name='homepage']").locator("xpath=//h2[normalize-space()='Our Company Vision']")
    //const companyVision = firstIFrameLocator.locator("xpath=//h2[normalize-space()='Our Company Vision']")
    console.log('Company Vision: ', await firstIFrameLocator.textContent())
    await expect(firstIFrameLocator).toContainText('Our Company Vision')
})

test.skip('Second Ifrmae Handle', async({page}) => {
    const secondFrame = await page.frame('popuppage')
    const alertBoxButton = await secondFrame.locator("button[name='alertbox']")
    await alertBoxButton.click()
    secondFrame.on('dialog', async dialog => dialog.accept())
})

test.only('Third Iframe Handle', async({page}) => {
    const thirdFrame = await page.frame('formpage')
    const firstName = await thirdFrame.locator('#vfb-5')
    await firstName.fill('Niraj')
})