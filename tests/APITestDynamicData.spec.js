const {test, expect} = require('@playwright/test')
import { faker } from '@faker-js/faker';
const {DataTime} = require('luxon')
var userid;

test('Get Users API', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log('Get Users API Response: '+await response.json())
    expect(response.status()).toBe(200)
})

test('Get Users API using params', async({request}) => {
    const response = await request.get('https://reqres.in/api/users',
    {
        params:{
            "page":2
        }
    } )
    console.log('Get Users API Response: '+await response.json())
    expect(response.status()).toBe(200)
})

/*
*   generate testdata --> npm install @faker-js/faker --save-dev
*	
*	generate custom date --> npm install --save luxon
*
*/
test('Create Users API', async({request}) => {
    const name = faker.person.firstName();
    const job = faker.person.jobTitle();
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{"name": name, "job": job},
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