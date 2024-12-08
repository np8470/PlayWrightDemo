const {test, expect} = require('@playwright/test')

test.beforeEach('Launch the app', async({page}) => {
   await page.goto('https://vinothqaacademy.com/demo-site-keyboard-events/')
})


test('Autosuggestions dropdown without keyboard action', async({page}) => {
   //await page.goto('https://vinothqaacademy.com/demo-site-keyboard-events/')

   // https://playwright.dev/docs/api/class-keyboard
   const searchElement = page.locator('#search-box')
   const language ='Python'
   await searchElement.fill(language)
   //const searchResultElement = page.locator("xpath=//div[@class='active']")
   await page.waitForSelector('#suggestion-box')
   //#suggestion-box
   //div[contains(text(),'JavaScript')]
   //div[id='suggestion-box'] div
   const selectLanguage = page.locator("xpath=//div[contains(text(),'Python')]")
   await selectLanguage.click()

   const currentURL = page.url()
   console.log('Current URL: ',currentURL)

   const pythonWikiURL = "https://en.wikipedia.org/wiki/Python_(programming_language)"  
   await expect(page).toHaveURL(pythonWikiURL)

   await page.goBack()

   // const selectedValue = searchElement.inputValue()
   // console.log('Selected Value: ',selectedValue)
   // await expect(selectedValue).toBe(language)
})

test('Autosuggestions dropdown with keyboard action', async({page}) => {
   //await page.goto('https://vinothqaacademy.com/demo-site-keyboard-events/')
   const searchElement = page.locator('#search-box')
   const language ='Python'
   await searchElement.fill(language)
   //const searchResultElement = page.locator("xpath=//div[@class='active']")
   await page.waitForSelector('#suggestion-box')
   //#suggestion-box
   //div[contains(text(),'JavaScript')]
   //div[id='suggestion-box'] div
   // const selectLanguage = page.locator("xpath=//div[contains(text(),'Python')]")
   // await selectLanguage.click()
   await searchElement.press('ArrowDown')
   await searchElement.press('Enter')
   const currentURL = page.url()
   console.log('Current URL: ',currentURL)

   const pythonWikiURL = "https://en.wikipedia.org/wiki/Python_(programming_language)"  
   await expect(page).toHaveURL(pythonWikiURL)

   await page.goBack()

   // const selectedValue = searchElement.inputValue()
   // console.log('Selected Value: ',selectedValue)
   // await expect(selectedValue).toBe(language)
})