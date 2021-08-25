const express = require('express')
const cors = require('cors')

const MonthsRoute = require('./sixMonthsRoute')
const WeeksRoute = require('./twoWeeksRoute')

const app = express()

app.use(cors())
app.use(MonthsRoute)
app.use(WeeksRoute)


module.exports = app