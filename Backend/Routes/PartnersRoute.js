let router = require('express').Router();
var controller = require('../Controllers/PartnershipsController')
const { checkAdminAuthorization, checkAuthorization } = require('../AuthUtils');

/**
 * Create new Parter
 */
 router.post('/create', checkAdminAuthorization, function (req, res) {
    return controller.createPartnership(req.body)
              .then(data => res.jsonp(data))
              .catch(error => res.status(500).jsonp(error))
});

/**
 * Get all Partners
 */
router.get('/', checkAuthorization, function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
