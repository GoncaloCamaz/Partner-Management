let router = require('express').Router();
var controller = require('../Controllers/PaymentController')

/**
 * Register Payment
 */
router.post('/create', function(req, res){
    return controller.createPayment(req.body)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

/**
 * Lists all payments
 */
router.get('/', function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
