let router = require('express').Router();
var associateController = require('../Controllers/AssociatesController')
var partnershipController = require('../Controllers/PartnershipsController')
const { checkAuthorization } = require('../AuthUtils');

router.get('/:associateEmail', checkAuthorization, async (req,res) => {
    try {
        const associateEmail = req.params.associateEmail
        const partnerships = await partnershipController.listAllActive()
        const associate = await associateController.findAssociateByEmail(associateEmail)

        return res.jsonp({associate: associate, partnerships: partnerships})
    } catch(e)
    {
        res.status(500).jsonp("Something went wrong!")
    }
})

module.exports = router;