const util = require('../models/util.js')
const express = require('express')
const userController = express.Router()
const bcrypt = require('bcrypt')
const config = require("../server/config/config")


const passport = require('passport')
const initializePassport = require('../server/config/passport-config')

initializePassport(
    passport, 
    username => users.find(user => user.username === username),
    id => users.find(user => user.id === id)
)

const users = []


// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         console.log("user is authenticated")
//         res.redirect('/')
//     }
//     console.log("user is  not authenticated")
//     next()
// }



userController.get('/register', util.logRequest,  (req, res) => {
    res.sendFile('register.html', {root: config.ROOT})
})
userController.get('/login', util.logRequest, (req, res) => {
    res.sendFile('login.html', {root: config.ROOT})
})

userController.post('/login', util.logRequest, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

userController.post('/register', util.logRequest, async (req, res) => {
    console.log('post to register')
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            password: hashedPassword,
        })
        res.redirect('/login')
    } catch (error) {
        res.redirect('/register')
    }
    console.log(users)
})


module.exports = userController