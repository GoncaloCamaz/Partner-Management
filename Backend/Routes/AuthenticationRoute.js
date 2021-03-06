var express = require('express');
var router = express.Router();
var controller = require('../Controllers/AssociatesController')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { checkAdminAuthorization } = require('../AuthUtils');

/**
 * Authentication process
 */
router.post('/login', async (req, res) => {   
    try{
        const credentials = {
            email: req.body.email,
            password: req.body.password
        }
        const user = await controller.findAssociateByEmail(credentials.email)
        if(user)
        {
            const validPassword = user.password === credentials.password ? true : false //await bcrypt.compare(credentials.password, user.password)
            if(validPassword)
            {
                const userinfo = {email: user.email, userRole: user.userRole}
                const accessToken = jwt.sign(userinfo, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '2h'})
                res.status(200).jsonp({token: accessToken, userRole: userinfo.userRole})
            }
            else
            {
                res.status(401).jsonp("Wrong credentials!")
            }
        }
        else
        {
            res.status(404).jsonp("User not found!")
        }
    } catch(e)
    {
        res.status(500).jsonp("Something went wrong!")
    }
})

router.get('/authenticated', checkAdminAuthorization, async (req, res) => {
    res.status(200).jsonp("Authenticated")
})

module.exports = router;
