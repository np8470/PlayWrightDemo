const {test, expect} = require('@playwright/test')
const testdata = JSON.parse(JSON.stringify(require("../registerform.json")))

test('Registration Form', async({page}) => {
    await page.goto(testdata.baseUrl)

    //verify registration page title
    const registrationTitle = page.locator("xpath=//h3[normalize-space()='Register For Demo']")
    await expect(registrationTitle).toHaveText(testdata.registrationTitle)
    console.log(await registrationTitle.textContent())

    //Fill firstname and verify
    const firstNameElement = page.locator('#vfb-5')
    await firstNameElement.fill(testdata.firstname)
    await expect(firstNameElement).toHaveValue(testdata.firstname)
    await expect(firstNameElement).toHaveValue(/^[A-Za-z]+$/)

    // Fill lastname and verify
    const lastNameElement = page.locator('#vfb-7')
    await lastNameElement.fill(testdata.lastname)
    await expect(lastNameElement).toHaveValue(testdata.lastname)

    // Select Gender - Male and verify
    const maleGender = page.locator('#vfb-31-1')
    const femaleGender = page.locator('#vfb-31-2')
    await maleGender.check()
    await expect(maleGender).toBeChecked()
    await expect(femaleGender).not.toBeChecked()

    // Fill address and verify
    const addressElement = page.locator('#vfb-13-address')
    await addressElement.fill(testdata.Address)
    await expect(addressElement).toHaveValue(testdata.Address)

    // Fill city and verify
    const cityElement = page.locator('#vfb-13-city')
    await cityElement.fill(testdata.city)
    await expect(cityElement).toHaveValue(testdata.city)

    // Fill State and verify
    const stateElement = page.locator('#vfb-13-state')
    await stateElement.fill(testdata.state)
    await expect(stateElement).toHaveValue(testdata.state)

    // Fill postalcode and verify
    const postalCodeElement = page.locator('#vfb-13-zip')
    await postalCodeElement.fill(testdata.postalcode)
    await expect(postalCodeElement).toHaveValue(testdata.postalcode)

    // Select country and value
    const countryElelment = page.locator('#vfb-13-country')
    countryElelment.selectOption({label:'India'})
    await expect(countryElelment).toHaveValue(testdata.country)

    /* countryElelment.selectOption(countryValue)
    await expect(countryElelment).toHaveValue(countryValue) */

    /*countryElelment.selectOption({index:1})
    await expect(countryElelment).toHaveValue(countryValue)*/

    // Fill email and verify
    const emailElement = page.locator('#vfb-14')
    await emailElement.fill(testdata.email)
    await expect(emailElement).toHaveValue(testdata.email)

    // Fill Date of Demo(MM/DD//YY format) and verify
    const dateElement = page.locator('#vfb-18')
    await dateElement.fill(testdata.dateofdemo)
    await expect(dateElement).toHaveValue(testdata.dateofdemo)

    // Fill Convenient time in HH and MM and verify
    const hourElement = page.locator('#vfb-16-hour')
    const minuteElement = page.locator('#vfb-16-min')
    await hourElement.selectOption(testdata.hour)
    await minuteElement.selectOption(testdata.minute)
    await expect(hourElement).toHaveValue(testdata.hour)
    await expect(minuteElement).toHaveValue(testdata.minute)

    // Fill mobile number and verify
    const mobileElement = page.locator('#vfb-19')
    await mobileElement.fill(testdata.mobile)
    await expect(mobileElement).toHaveValue(testdata.mobile)

    // check course and verify
    const seleniumElement = page.locator('#vfb-20-0')
    const devOpsElement = page.locator('#vfb-20-3')
    await seleniumElement.check()
    await devOpsElement.uncheck()
    await expect(seleniumElement).toBeChecked()
    await expect(devOpsElement).not.toBeChecked()

    // Fill query and verify

    const queryElement = page.locator('#vfb-23')
    await queryElement.fill(testdata.query)
    await expect(queryElement).toHaveValue(testdata.query)

    // Fill verification digit and verify
    const verificationElement = page.locator('#vfb-3')
    await verificationElement.fill(testdata.verificationCode)
    await expect(verificationElement).toHaveValue(testdata.verificationCode)

    // Click on submit button
    const submitButton = page.locator('#vfb-4')
    submitButton.click()

    // verify navigation of url after clicking submit button
    const currentUrl = page.url()
    await expect(page).toHaveURL(testdata.transactionUrl)

    // verify transaction title details
    const transactionTitle = page.locator("xpath=//h2")
    await expect(transactionTitle).toHaveText(testdata.transactionTitle)
    console.log(await transactionTitle.textContent())

    // verify transaction success msg
    const successMsg = page.locator('#messageContainer')
    await expect(successMsg).toContainText(testdata.success)
    console.log(await successMsg.textContent())
})

test('Verify Images', async({page}) => {
    await page.goto(testdata.baseUrl)
    
    const staticImage = page.locator("xpath=//img[@alt='Automation']")
    await expect(staticImage).toHaveAttribute('alt', 'Automation');

    const image2 = page.locator("xpath=//img[@alt='Vinoth Q.A Academy']")
    await expect(image2).toHaveAttribute('alt', 'Vinoth Q.A Academy')
    
})