const util = require('../models/util.js')
const express = require('express')
const userController = express.Router()
const bcrypt = require('bcrypt')

const users = []

userController.get('/register', util.logRequest, (req, res) => {
    res.sendFile('register.html')
})
userController.get('/login', util.logRequest, (req, res) => {
    res.sendFile('login.html')
})

userController.post('/login', util.logRequest, (req, res) => {

})

userController.post('/register', util.logRequest, async (req, res) => {
    console.log('post to register')
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            password: hashedPassword,
        })
        res.redirect('/login.html')
    } catch (error) {
        res.redirect('/register.html')
    }
    console.log(users)
})

module.exports = userController