let router = require('express').Router();
var controller = require('../Controllers/PartnershipsController')
const { checkAdminAuthorization, checkAuthorization } = require('../AuthUtils');

/**
 * Create new Parter
 */
 router.post('/create', checkAdminAuthorization, async function (req, res) {
    try {
         const data = await controller.createPartnership(req.body);
         return res.jsonp(data);
     } catch (error) {
         return res.status(500).jsonp(error);
     }
});

/**
 * Remove partner
 */
router.delete('/delete/:name', async function(req,res) {
    try {
        const data = await controller.deletePartnership(req.params.name);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

/**
 * Get all Partners
 */
router.get('/', checkAuthorization, async function (_req, res) {
    try {
        const data = await controller.listAll();
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
});

module.exports = router;
