let router = require('express').Router();
var controller = require('../Controllers/DefinitionsController')
const { checkAdminAuthorization } = require('../AuthUtils');

/**
 * Create definitions
 */
router.post('/create', checkAdminAuthorization, function(req, res) {
    return controller.create(req.body)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

/**
 * Get all definitions
 */
router.get('/', checkAdminAuthorization, function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
