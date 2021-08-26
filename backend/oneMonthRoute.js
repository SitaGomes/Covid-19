const axios = require('axios')
const express = require('express');

const routes = express.Router()
const date = new Date();

//? Getting current date and previus date
const currentDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1, 
    day: date.getDate(),
}

const reduceDate = (days, months, years) => {
    
    const value = {
        year: date.getFullYear() + years,
        month: date.getMonth() + months + 1,
        day: date.getDate() + days 
    }
    
    return value;    
}

const previousDate = reduceDate(0, -1, 0)


routes.get('/cases/months/one', async (req, res) => {
    try{

        //? Axios request
        const covidOptions = {
            method: 'GET',
            url: 'https://api.covid19api.com/country/brazil?',
            params: {
                from: `${previousDate.year}-${previousDate.month}-${previousDate.day}`,
                to: `${currentDate.year}-${currentDate.month}-${currentDate.day}`,
            }
        }
    
        const {data} = await axios.request(covidOptions)    
    
        return res.status(200).send({
            cases: data
        })

    } catch (err) {
        return res.status(420).send({err: err})
    }
})


module.exports = routes
