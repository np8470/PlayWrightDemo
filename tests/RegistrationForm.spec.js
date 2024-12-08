const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('Registration Form', async({page}) => {
    await page.goto('https://vinothqaacademy.com/demo-site/')

    //verify registration page title
    const registrationTitle = page.locator("xpath=//h3[normalize-space()='Register For Demo']")
    await expect(registrationTitle).toHaveText('Register For Demo')
    console.log(await registrationTitle.textContent())

    //Fill firstname and verify
    const firstNameElement = page.locator('#vfb-5')
    const firstnameValue = 'Niraj'
    await firstNameElement.fill(firstnameValue)
    await expect(firstNameElement).toHaveValue(firstnameValue)
    await expect(firstNameElement).toHaveValue(/^[A-Za-z]+$/)

    // Fill lastname and verify
    const lastNameElement = page.locator('#vfb-7')
    const lastNameValue = 'Patel'
    await lastNameElement.fill(lastNameValue)
    await expect(lastNameElement).toHaveValue(lastNameValue)

    // Select Gender - Male and verify
    const maleGender = page.locator('#vfb-31-1')
    const femaleGender = page.locator('#vfb-31-2')
    await maleGender.check()
    await expect(maleGender).toBeChecked()
    await expect(femaleGender).not.toBeChecked()

    // Fill address and verify
    const addressElement = page.locator('#vfb-13-address')
    const addressValue = '1- Homeland Appartment'
    await addressElement.fill(addressValue)
    await expect(addressElement).toHaveValue(addressValue)

    // Fill city and verify
    const cityElement = page.locator('#vfb-13-city')
    const cityValue = 'Gandhinagar'
    await cityElement.fill(cityValue)
    await expect(cityElement).toHaveValue(cityValue)

    // Fill State and verify
    const stateElement = page.locator('#vfb-13-state')
    const stateValue = 'Gujarat'
    await stateElement.fill(stateValue)
    await expect(stateElement).toHaveValue(stateValue)

    // Fill postalcode and verify
    const postalCodeElement = page.locator('#vfb-13-zip')
    const zipCodeValue = '38242010'
    await postalCodeElement.fill(zipCodeValue)
    await expect(postalCodeElement).toHaveValue(zipCodeValue)

    // Select country and value
    const countryElelment = page.locator('#vfb-13-country')
    const countryValue='India'
    countryElelment.selectOption({label:'India'})
    await expect(countryElelment).toHaveValue(countryValue)

    /* countryElelment.selectOption(countryValue)
    await expect(countryElelment).toHaveValue(countryValue) */

    /*countryElelment.selectOption({index:1})
    await expect(countryElelment).toHaveValue(countryValue)*/

    // Fill email and verify
    const emailElement = page.locator('#vfb-14')
    const emailValue = 'test@test.com'
    await emailElement.fill(emailValue)
    await expect(emailElement).toHaveValue(emailValue)

    // Fill Date of Demo(MM/DD//YY format) and verify
    const dateElement = page.locator('#vfb-18')
    const dateValue = '11/14/2024'
    await dateElement.fill(dateValue)
    await expect(dateElement).toHaveValue(dateValue)

    // Fill Convenient time in HH and MM and verify
    const hourElement = page.locator('#vfb-16-hour')
    const hourValue = '10'
    const minuteElement = page.locator('#vfb-16-min')
    const minuteValue = '10'
    await hourElement.selectOption(hourValue)
    await minuteElement.selectOption(minuteValue)
    await expect(hourElement).toHaveValue(hourValue)
    await expect(minuteElement).toHaveValue(minuteValue)

    // Fill mobile number and verify
    const mobileElement = page.locator('#vfb-19')
    const mobileValue = '9876543210'
    await mobileElement.fill(mobileValue)
    await expect(mobileElement).toHaveValue(mobileValue)

    // check course and verify
    const seleniumElement = page.locator('#vfb-20-0')
    const devOpsElement = page.locator('#vfb-20-3')
    await seleniumElement.check()
    await devOpsElement.uncheck()
    await expect(seleniumElement).toBeChecked()
    await expect(devOpsElement).not.toBeChecked()

    // Fill query and verify

    const queryElement = page.locator('#vfb-23')
    const queryVlaue = 'This is first playwright automation demo.'
    await queryElement.fill(queryVlaue)
    await expect(queryElement).toHaveValue(queryVlaue)

    // Fill verification digit and verify
    const verificationElement = page.locator('#vfb-3')
    const code = '33'
    await verificationElement.fill(code)
    await expect(verificationElement).toHaveValue(code)

    // Click on submit button
    const submitButton = page.locator('#vfb-4')
    submitButton.click()

    // verify navigation of url after clicking submit button
    const currentUrl = page.url()
    const transactionURL = 'https://vinothqaacademy.com/transaction-id/'
    await expect(page).toHaveURL(transactionURL)

    // verify transaction title details
    const transactionTitle = page.locator("xpath=//h2[normalize-space()='Transaction Details']")
    await expect(transactionTitle).toHaveText('Transaction Details')
    console.log(await transactionTitle.textContent())

    // verify transaction success msg
    const successMsg = page.locator('#messageContainer')
    await expect(successMsg).toContainText('Registration Form is Successfully Submitted. The Transaction ID :')
    console.log(await successMsg.textContent())
})

test('Verify Images', async({page}) => {
    await page.goto('https://vinothqaacademy.com/demo-site/')
    
    const staticImage = page.locator("xpath=//img[@alt='Automation']")
    await expect(staticImage).toHaveAttribute('alt', 'Automation');

    const image2 = page.locator("xpath=//img[@alt='Vinoth Q.A Academy']")
    await expect(image2).toHaveAttribute('alt', 'Vinoth Q.A Academy')
    
})