const {test, expect} = require('@playwright/test')

var userid;

test('Get Users API', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log('Get Users API Response: '+await response.json())
    expect(response.status()).toBe(200)
})

test('Create Users API', async({request}) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{"name": "Niraj", "job": "Automation"},
            headers:{"Accept": "application/json"}        
        })
    console.log('Create Users API Response: '+await response.json())
    expect(response.status()).toBe(201)
    var res = response.json()
    userid = res.id
})

test('Update Users API', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/'+userid,
        {
            data:{"name": "Niraj", "job": "Engineer"},
            headers:{"Accept": "application/json"}        
        })
    console.log('Update Users API Response: '+await response.json())
    expect(response.status()).toBe(200)
})

test('Delete Users API', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)
})