let router = require('express').Router();
var controller = require('../Controllers/PartnershipsController')

/**
 * Get all Partners
 */
router.get('/', function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

/**
 * Create new Parter
 */
router.post('/create', function (req, res) {
    return controller.createPartnership(req.body)
              .then(data => res.jsonp(data))
              .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
