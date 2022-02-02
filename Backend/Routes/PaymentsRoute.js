let router = require('express').Router();
var controller = require('../Controllers/PaymentController')
const { checkAdminAuthorization, checkAuthorization } = require('../AuthUtils');

/**
 * Register Payment
 */
router.post('/create', checkAdminAuthorization, async function(req, res){
    try {
        const data = await controller.createPayment(req.body);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

/**
 * Lists all payments
 */
router.get('/', checkAdminAuthorization,async function (_req, res) {
    try {
        const data = await controller.listAll();
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
});

/**
 * Lists all payments from an associate
 */
router.get('/:associate_number', checkAuthorization, async function(req, res) {
    try {
        const data = await controller.listAllByAssociate(req.params.associate_number);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

module.exports = router;
