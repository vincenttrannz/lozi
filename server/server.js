const express = require('express')

const server = express()
const profileRouter = require('./routes/profiles')
const userRouter = require('./routes/users')
const authRoutes = require('./routes/auth')

const subscribeRoutes = require('./routes/subscribe')

server.use(express.json())
server.use(express.static('public'))

server.use('/api', authRoutes) //authenticare automatically adds '/auth' to this address
server.use('/api/users', userRouter)
server.use('/api/profiles', profileRouter)
server.use('/api/subscribe', subscribeRoutes)

module.exports = server
