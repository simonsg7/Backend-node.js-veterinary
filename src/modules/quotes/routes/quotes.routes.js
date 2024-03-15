const express = require('express')
const quotes = require('../services/quotes.services')

const router = express.Router()

router.get('/all', quotes.getAllQuotes)

router.get('/byid/:id', quotes.getByIdQuotes)

module.exports = router