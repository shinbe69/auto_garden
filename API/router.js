const express = require('express')
const router = express.Router()
const client = require('../persistence/connectDB')

router.get('/check-health', (req, res) => {
    res.send("*** Hello from Sang'server ***")
})

router.post('/data', async (req, res) => {
    let { moisture } = req.body
    if (moisture === undefined) return res.sendStatus(400)
    console.log('Moisture: %s', moisture)
    await client.RPUSH('data', JSON.stringify({moisture}))
    res.sendStatus(200)
})

router.get('/data', async (req, res) => {
    let lastest_record = await client.LRANGE('data', -1, -1)
    res.json(lastest_record)
})

module.exports = router