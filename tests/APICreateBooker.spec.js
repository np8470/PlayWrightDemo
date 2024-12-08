const {test, expect} = require('@playwright/test')

test('Create Booking POST API Request', async({request}) => {
    const responsePostAPI = await request.post('https://restful-booker.herokuapp.com/booking',
        {
            data:
            {
                "firstname": "Niraj",
                "lastname": "Patel",
                "totalprize": 1000,
                "depostpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "super bowls",
            },
            headers:
            {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        //const responseBody = await responsePostAPI.json()
        console.log(await responsePostAPI.status())
})