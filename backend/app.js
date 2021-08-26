const express = require('express')
const cors = require('cors')

const sixMonthsRoute = require('./sixMonthsRoute')
const WeeksRoute = require('./twoWeeksRoute')
const oneMonthRoute = require('./oneMonthRoute')

const app = express()

app.use(cors())
app.use(oneMonthRoute)
app.use(sixMonthsRoute)
app.use(WeeksRoute)


module.exports = app