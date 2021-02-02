const {expect} = require('chai');
const app = require('supertest')(require('../app'))
const {syncAndSeed} = require('../db')

describe('Routes',()=>{
    beforeEach(()=>syncAndSeed())
    describe('GET /',()=>{
        it('shows api',async()=>{
            const response = await app.get('/');
            expect(response.status).to.equal(200);
            expect(response.text).to.include('Acme API');
        })
    })
})