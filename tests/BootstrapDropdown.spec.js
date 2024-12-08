const {test, expect} = require('@playwright/test')

test('Bootstrap dropdwon', async({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    // approach 1-  verify number of elements of dropdwon
    await page.locator('.multiselect').click()
    const options1 = await page.locator('ul>li label input')
    await expect(options1).toHaveCount(11)
   
    // approach 2-  verify number of elements of dropdwon and 
    const options2 = await page.$$('ul>li label input')
    await expect(options2.length).toBe(11)
    
    // print all potions and select/unselect options
    const options3 = await page.$$('ul>li label')
    for(const option of options3)
    {
        const value = await option.textContent()
        console.log("Option Value: ", value);
        if(value.includes('Java') || value.includes('Oracle'))
        {
            await option.click()
        }
        if(value.includes('HTML') || value.includes('CSS'))
            {
                await option.click()
            }
    }


})