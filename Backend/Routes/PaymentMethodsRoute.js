let router = require('express').Router();
var controller = require('../Controllers/PaymentMethodController')

/**
 * Get all Payment methods
 */
router.get('/', function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
