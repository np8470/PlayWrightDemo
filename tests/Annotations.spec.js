const{test, expect} = require('@playwright/test')




    // execute only this testcase
    test.only('Test 1', async() => {
        console.log("This is Test 1......");
    })
    // skip the execution
    test.skip('Test 2', async() => {
        console.log("This is Test 2......");
    })
    // mark as fail and it will execute and it indeed fail. if not fails then playwright will complain
    test.fail('Test 3', async() => {
        console.log("This is Test 3......");
    })
    // mark as fail and it will not execute. Use this when test is running slow or crashes
    test.fixme('Test 4', async() => {
        console.log("This is Test 4......");
    })
    // marks as slow and triples the test timeout
    test.slow('Test 5', async() => {
        console.log("This is Test 5......");
    })

    test('Test 6', async({page, browserName}) => {
        console.log("This is Test 1......");
        if(browserName=='chromium')
        {
            test.skip()
        }
    })

    test('Test 7', async() => {
        console.log("This is a known issue once it will be fixed , it will be executed......");
            test.fixme()
    })

    test('Test 8', async() => {
        test.fail()
        console.log("This is a fail testcase......");
        expect(1).toBe(1)  // fail
        //expect(3).toBe(1)  // pass
    })

    test('Test 9', async({page}) => {
        test.slow()
        await page.goto('https://vinothqaacademy.com/mouse-event/')
        console.log("This is a slow testcase so it will increase timeout 3 times of set timeout in config file......");
    })

