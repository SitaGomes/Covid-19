const express = require('express')
const MonthsRoute = require('./sixMonthsRoute')
const WeeksRoute = require('./twoWeeksRoute')

const app = express()

app.use(MonthsRoute)
app.use(WeeksRoute)


module.exports = app