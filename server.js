const app = require('./app')
const {syncAndSeed} = require('./db')
const port = process.env.PORT || 3000

const init = async()=>{
    app.listen(port,async()=>{
        await syncAndSeed();
        console.log('listening to ${port}')
    })
}

init();