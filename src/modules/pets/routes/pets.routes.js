const express = require('express')
const pets = require('../services/pets.services')

const router = express.Router()

router.get('/all', pets.getAllPets)

router.get('/byid/:id', pets.getByIdPets)

module.exports = router