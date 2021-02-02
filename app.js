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