let router = require('express').Router();
var controller = require('../Controllers/PaymentController')
const { checkAdminAuthorization, checkAuthorization } = require('../AuthUtils');

/**
 * Register Payment
 */
router.post('/create', checkAdminAuthorization, function(req, res){
    return controller.createPayment(req.body)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

/**
 * Lists all payments
 */
router.get('/', checkAdminAuthorization,function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

/**
 * Lists all payments from an associate
 */
router.get('/associate/:associate_number', checkAuthorization, function(req, res) {
    return controller.listAllByAssociate(req.params.associate_number)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

module.exports = router;
