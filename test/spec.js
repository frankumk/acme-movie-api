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
    describe('GET /api/movies',()=>{
        it('shows api',async()=>{
            const response = await app.get('/api/movies');
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(4);
        })
    })
    describe('GET /api/actors',()=>{
        it('shows api',async()=>{
            const response = await app.get('/api/movies');
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(4);
        })
    })
})