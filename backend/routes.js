const express = require('express');

const routes = express.Router()

routes.get('/cases', (req, res) => {
    res.status(200).send(
        { message: "Medalha"}
    )
})

module.exports = routes