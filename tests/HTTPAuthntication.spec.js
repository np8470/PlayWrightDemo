const {test,expect}= require('@playwright/test')

test.describe('Handle HTTP Auth', () => {
    test('HTTP Authntication Test', async({browser}) => {
        const browserContext = browser.newContext({
            httpCredentials:{
                username:"postman",
                password:"password"
            }
        })
        const pageContext = await (await browserContext).newPage()
        await pageContext.goto('https://postman-echo.com/basic-auth')
        var text = await pageContext.locator('body').innerText()
        console.log('Text :', text);
        
    })
})
