const util = require('../models/util.js')
const express = require('express')
const config = require("../server/config/config")

const homeController = express.Router()


function checkAuthenticated(req, res, next) {
    console.log("checking athentication")
    if (req.isAuthenticated()) {
        console.log("user is authenticated")
        return next()
    }
    console.log("user not auhtenticated")
    res.redirect('/login')
}

// homeController.use('/', checkAuthenticated);
// homeController.use('/about', checkAuthenticated);



homeController.get('/', checkAuthenticated, (req, res) => {
    res.sendFile('posts.html', {root: config.ROOT})
})

homeController.get('/about', checkAuthenticated, (req, res) => {
    res.sendFile('about.html', { root: config.ROOT })
})


module.exports = homeController