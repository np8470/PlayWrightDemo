const {expect} = require('@playwright/test')
class RegistrationFormPage
{
    constructor(page)
    {
        this.page=page
        this.title="//h3[normalize-space()='Register For Demo']"
        this.firstname="#vfb-5"
        this.lastname="#vfb-7"
        this.malegender="#vfb-31-1"
        this.femalegender="#vfb-31-2"
        this.address="#vfb-13-address"
        this.city="#vfb-13-city"
        this.state="#vfb-13-state"
        this.country="#vfb-13-country"
        this.postalcode="#vfb-13-zip"
        this.email="#vfb-14"
        this.dateofdemo="#vfb-18"
        this.hour="#vfb-16-hour"
        this.minute="#vfb-16-min"
        this.mobile="#vfb-19"
        this.seleniumcourse="#vfb-20-0"
        this.devopscourse="#vfb-20-3"
        this.coursesSelect = [
            "//input[@type='checkbox' and @value='Selenium WebDriver']",
            "//input[@type='checkbox' and @value='Java']",
            "//input[@type='checkbox' and @value='TestNG']"
        ]
        this.coursesUnSelect = [
            "//input[@type='checkbox' and @value='DevOps']",
            "//input[@type='checkbox' and @value='Functional Testing']",
            "//input[@type='checkbox' and @value='Others']"
        ]
        this.query="#vfb-23"
        this.verificationcode="#vfb-3"
        this.submitbutton="#vfb-4"
    }

    async enterFirstname(firstname)
    {
        await expect.soft(this.page.locator(this.firstname)).toBeVisible()
        await expect.soft(this.page.locator(this.firstname)).toBeEnabled()
        await expect.soft(this.page.locator(this.firstname)).toBeEditable()
        await this.page.fill(this.firstname, firstname)
    }
    async verifyFirstName(firstname)
    {
        await expect.soft(this.page.locator(this.firstname)).toHaveValue(firstname)
    }
    async enterLastName(lastname)
    {
        await this.page.fill(this.lastname, lastname)
    }
    async verifyLastName(lastname)
    {
        await expect.soft(this.page.locator(this.lastname)).toHaveValue(lastname)
    }
    async selectMaleGender()
    {
        await this.page.locator(this.malegender).check()
    }
    async verifyGenderSelectionOption()
    {
        await expect.soft(this.page.locator(this.malegender)).toBeChecked()
        //await expect.soft(this.page.locator(this.malegender)).isChecked().toBeTruthy()
        await expect.soft(this.page.locator(this.femalegender)).not.toBeChecked()
       // await expect.soft(this.page.locator(this.femalegender)).isChecked().toBeFalsy()
    }
    async enterAddress(Address)
    {
        await this.page.fill(this.address, Address)
    }
    async verifyAddress(Address)
    {
        await expect.soft(this.page.locator(this.address)).toHaveValue(Address)
    }
    async enterCity(city)
    {
        await this.page.fill(this.city, city)
    }
    async verifyCity(city)
    {
        await expect.soft(this.page.locator(this.city)).toHaveValue(city)
    }
    async enterState(state)
    {
        await this.page.fill(this.state, state)
    }
    async verifyState(state)
    {
        await expect.soft(this.page.locator(this.state)).toHaveValue(state)
    }
    async selectCountry(country)
    {
        await this.page.locator(this.country).selectOption(country)
    }
    async verifyCountry(country)
    {
        await expect.soft(this.page.locator(this.country)).toHaveValue(country)
    }
    async enterPostalCode(postalcode)
    {
        await this.page.fill(this.postalcode, postalcode)
    }
    async verifyPostalCode(postalcode)
    {
        await expect.soft(this.page.locator(this.postalcode)).toHaveValue(postalcode)
    }
    async enterEmail(email)
    {
        await this.page.fill(this.email, email)
    }
    async verifyEmail(email)
    {
        await expect.soft(this.page.locator(this.email)).toHaveValue(email)
    }
    async enterDateOfDemo(dateofdemo)
    {
        await this.page.fill(this.dateofdemo, dateofdemo)
    }
    async verifyDateOfDemo(dateofdemo)
    {
        await expect.soft(this.page.locator(this.dateofdemo)).toHaveValue(dateofdemo)
    }
    async selectConvenientTime(hour, minute)
    {
        await this.page.locator(this.hour).selectOption(hour)
        await this.page.locator(this.minute).selectOption(minute)
    }
    async verifyConvenientTime(hour, minute)
    {
        await expect.soft(this.page.locator(this.hour)).toHaveValue(hour)
        await expect.soft(this.page.locator(this.minute)).toHaveValue(minute)
    }
    async enterMobile(mobile)
    {
        await this.page.fill(this.mobile, mobile)
    }
    async verifyMobile(mobile)
    {
        await expect.soft(this.page.locator(this.mobile)).toHaveValue(mobile)
    }
    async selectCourse()
    {
        /*await this.page.locator(this.seleniumcourse).check()
        await this.page.locator(this.devopscourse).uncheck()
        */
       for(const locator of this.coursesSelect)
       {
            await this.page.locator(locator).check()
       }
       for(const locator of this.coursesUnSelect)
        {
            if(this.page.locator(locator).isChecked())
            {
                await this.page.locator(locator).uncheck()
            }
        }
    }
    async verifyCourseSelection()
    {
        for(const locator of this.coursesSelect)
        {
            await expect.soft(this.page.locator(locator)).toBeChecked()
        }
        for(const locator of this.coursesUnSelect)
        {
            await expect.soft(this.page.locator(locator)).not.toBeChecked()
        }
    }
    async enterYourQuery(query)
    {
        await this.page.fill(this.query, query)
    }
    async verifyYourQuery(query)
    {
        await expect.soft(this.page.locator(this.query)).toHaveValue(query)
    }
    async enterVerificationCode(verificationCode)
    {
        await this.page.fill(this.verificationcode, verificationCode)
    }
    async verifyVerificationCode(verificationCode)
    {
        await expect.soft(this.page.locator(this.verificationcode)).toHaveValue(verificationCode)
    }
    async clickOnSubmitButton()
    {
        await this.page.locator(this.submitbutton).click()
    }
}

module.exports=RegistrationFormPage