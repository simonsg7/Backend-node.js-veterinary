const request = require('supertest')
const app = require('../app')

describe('Testing module /users', ()=>{

    test('Should respond array user exist', async ()=>{
        const response = await request(app)
            .post('/api/v1/userslog/auth')
            .send({email: 'rosi@gmail.com', password: 'casa1'})
      
        expect(response.body.token).toBeDefined()
    })

    test('Should respond array users method get', async ()=>{
        const response = await request(app)
            .get('/api/v1/users/all')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvc2lAZ21haWwuY29tIiwicGFzc3dvcmQiOiJjYXNhMSIsImlhdCI6MTcxMDI4OTExMH0.-1IOVO1qRUzjK17YP9rY5_InnEPWNncLcC67A7IVbqs')
            .send()
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    test('Should respond user create succesfully', async ()=>{
        const response = await request(app)
            .post('/api/v1/userslog/register')
            .send({full_name: 'Alberto Guzman', phone: '7777777', address: 'calle 20', email: 'guzman@gmail.com', rol: 'USER', password: 'casa1'}) 
        expect(response.body.message).toBe('USER_CREATE_SUCCESFULLY')
    })
})