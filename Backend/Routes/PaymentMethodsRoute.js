let router = require('express').Router();
var controller = require('../Controllers/PaymentMethodController')

/**
 * Create new Payment Method
 */
router.post('/create', function(req, res){
    return controller.create(req.body)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

/**
 * Get all Payment methods
 */
router.get('/', function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
