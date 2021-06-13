
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../AuthenticationUtils');

router.get('/posts', authenticateToken, (req, res) => {
    res.json([{hello: "test"}])
})

router.post('/login', function (req, res) {
    // authenticate user
    const email = req.body.email
    const password = req.body.password
    const user = {email: email, userrole: "user"}
    console.log(process.env.ACCESS_TOKEN_SECRET)
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    console.log(email)
    console.log(password)
    res.json({token: accessToken})
})

module.exports = router;
