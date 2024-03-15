const express = require('express')
const users = require('../services/user.service')

const router = express.Router()

router.post('/auth', users.authUser)
router.post('/register', users.createUser)

module.exports = router