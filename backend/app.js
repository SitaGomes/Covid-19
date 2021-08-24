const express = require('express')
const Routes = require('./routes')
const MonthsRoute = require('./sixMonthsRoute')


const app = express()

app.use(Routes)
app.use(MonthsRoute)


module.exports = app