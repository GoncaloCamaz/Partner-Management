let router = require('express').Router();
var controller = require('../Controllers/DefinitionsController')

/**
 * Get all definitions
 */
router.get('/', function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
