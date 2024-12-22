const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
const router = require('./API/router')

app.use(router)

app.listen(process.env.PORT || 3001, process.env.HOST || '0.0.0.0', (err) => {
    if (err) console.log('*** Setting up server failed! ***')
    console.log('*** API server is now ready at port', process.env.PORT, 'on', process.env.HOST, '***')
})