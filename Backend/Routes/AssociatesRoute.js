let router = require('express').Router();
var controller = require('../Controllers/AssociatesController')
const { checkAdminAuthorization } = require('../AuthUtils');

/**
 * Get all associates
 */
router.get('/', checkAdminAuthorization, function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

/**
 * Create new Associate
 */
router.post('/create', checkAdminAuthorization, function (req, res) {
    return controller.createAssociate(req.body)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

module.exports = router;
