let router = require('express').Router();
var controller = require('../Controllers/PaymentMethodController')
const { checkAdminAuthorization, checkAuthorization } = require('../AuthUtils');

/**
 * Create new Payment Method
 */
router.post('/create', checkAdminAuthorization, function(req, res){
    return controller.create(req.body)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

/**
 * Get all Payment methods
 */
router.get('/', checkAuthorization,function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
