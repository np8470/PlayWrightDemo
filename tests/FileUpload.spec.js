const{test,expect} = require('@playwright/test')

test('File Upload', async({page}) => {
    //https://playwright.dev/docs/input
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles("./upload/image.jpg")
    await page.locator('#file-submit').click()
    const message = await page.locator("//h3")
    await expect(message).toHaveText('File Uploaded!')
    const imageName = await page.locator("xpath=//div[@id='uploaded-files']")
    await expect(imageName).toHaveText('image.jpg')

    // Remove all the selected files
    //await page.locator('#file-upload').setInputFiles([]);
})