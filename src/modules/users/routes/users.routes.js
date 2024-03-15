const express = require('express')
const users = require('../services/user.service')

const router = express.Router()

router.get('/all', users.getAllUsers)

router.get('/byid/:id', users.getById)

router.post('/create', users.createUser)

router.put('/update', users.updateUser)

router.delete('/delete/:id', users.deleteUser)

router.post('/auth', users.authUser)

module.exports = router