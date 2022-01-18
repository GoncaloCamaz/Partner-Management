let router = require('express').Router();
var controller = require('../Controllers/GroupController')

/**
 * Create new group
 */
router.post('/create', function(req, res) {
    return controller.createGroup(req.body)
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
})

/**
 * List all groups
 */
router.get('/', function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
