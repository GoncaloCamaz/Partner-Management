let router = require('express').Router();
var associateController = require('../Controllers/AssociatesController')
var partnershipController = require('../Controllers/PartnershipsController')
const { checkAuthorization } = require('../AuthUtils');

router.get('/', checkAuthorization, async (req,res) => {
    try {
        const associateEmail = req.body.associateEmail
        const partnerships = partnershipController.listAllActive()
        const associate = associateController.findAssociateByEmail(associateEmail)

        return res.jsonp({associate: associate, partnerships: partnerships})
    } catch(e)
    {
        res.status(500).jsonp("Something went wrong!")
    }
})