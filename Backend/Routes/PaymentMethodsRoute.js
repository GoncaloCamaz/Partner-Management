let router = require('express').Router();
var controller = require('../Controllers/PaymentMethodController')
const { checkAdminAuthorization, checkAuthorization } = require('../AuthUtils');

/**
 * Create new Payment Method
 */
router.post('/create', checkAdminAuthorization, async function(req, res){
    try {
        const data = await controller.create(req.body);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

/**
 * Delete payment method
 */
router.delete('/delete/:name', checkAdminAuthorization, async function(req,res){
    try {
        const data = await controller.delete(req.params.name);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

/**
 * Get all Payment methods
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
