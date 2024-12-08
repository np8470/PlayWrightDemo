const {test, expect} = require('@playwright/test')

test.beforeEach('Launch the Mouse Event page url', async({page}) => {
    await page.goto('https://vinothqaacademy.com/mouse-event/')
})

test('Drag and Drop functionality', async({page}) => {
    //await page.goto('https://vinothqaacademy.com/mouse-event/')
    const sourceElement = page.locator('#draggableElement')
    const destinationElement = page.locator('#droppableElement')
    await sourceElement.dragTo(destinationElement) 
    await page.screenshot({path:'screenshot/'+ Date.now() + 'Page.png'})
    /* await sourceElement.hover())
    await page.mouse.down()
    await destinationElement.hover()
    await destinationElement.hover()
    await page.mouse.up() */
})

test('Mouse action - tooltip', async({page}) => {
    const tooltipElement = page.locator('#textbox')
    await tooltipElement.hover({force:true})
    const tooltipText = await tooltipElement.getAttribute('title')
    console.log('Tooltip value : ',tooltipText)
    await expect(tooltipText).toBe('Enter First Name')
    await page.screenshot({path:'screenshot/'+ Date.now() + 'FullPage.png', fullPage: true})
})

test('Mouse action - double click', async({page}) => {
    const buttonElement = page.locator('#dblclick')
    await buttonElement.dblclick()
    const text = 'Double Click Action is Performed'
    const textElement = page.locator('#demo')
    await textElement.screenshot({path:'screenshot/'+ Date.now() + 'Element.png'})
    await expect(textElement).toContainText(text)
})

test('Mouse action - context/right click', async({page}) => {
    const buttonElement = page.locator('#rightclick')
    await buttonElement.click({button:'right'})
    const registrationFormLink = page.locator("xpath=//div[@id='myDiv']//a[normalize-space()='Registration Form']")
    const alertPopupLink = page.locator("xpath=//a[normalize-space()='Alert Popup']")
    const mouseEventLink = page.locator("xpath=//div[@id='myDiv']//a[normalize-space()='Mouse Event']")
    
    await expect(registrationFormLink).toBeVisible()
    await expect(alertPopupLink).toBeVisible()
    await expect(mouseEventLink).toBeVisible()
})

