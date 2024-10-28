const express = require("express")
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

app.post('/', (req, res) => {
    if(req.body.category == "comedy") {
        console.log(' ', req.body)
        res.status(200).send(' ' + req.body.name).end()
    }
    else {
        console.log(' ', req.body)
        res.status(200).end()
    }
})

app.listen(PORT, () => console.log(`  Server running on port ${PORT}`))

