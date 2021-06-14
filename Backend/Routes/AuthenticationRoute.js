
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/**
 * Authentication process
 */
router.post('/login', function (req, res) {
    // authenticate user
    // TODO CONTROLLER
    const email = req.body.email
    const password = req.body.password
    const user = {email: email, userrole: "user"}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '2h'})
    res.json({token: accessToken})
})

module.exports = router;
