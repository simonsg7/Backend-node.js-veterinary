const express = require('express')
const users = require('../src/modules/users/routes/users.routes')
const usersAuth = require('../src/modules/users/routes/userAuth.router')
const pets = require('../src/modules/pets/routes/pets.routes')
const quotes = require('../src/modules/quotes/routes/quotes.routes')
const passport = require('passport')
require('../utils/auth/index')

const routers = (app)=>{
    const baseRoute = express.Router()
    app.use(express.static('public'))
    app.use('/api/v1', baseRoute)
    baseRoute.use('/userslog', usersAuth)
    baseRoute.use('/users', passport.authenticate('jwt', {session: false}), users)
    baseRoute.use('/pets', passport.authenticate('jwt', {session: false}), pets)
    baseRoute.use('/quotes', passport.authenticate('jwt', {session: false}), quotes)
}

module.exports = routers