const express = require('express')
const app = express()
const {models: {Movie, Actor, Role}} = require('./db')

module.exports = app

app.get('/', (req,res)=>{
    res.send(`
        <html>
            <body>
                Acme API
            </body>
        </html>
    `)
})

app.get('/api/movies', async(req,res)=>{
    res.status(200).send(await Movie.findAll())
})

app.get('/api/actors', async(req,res)=>{
    res.status(200).send(await Actor.findAll())
})