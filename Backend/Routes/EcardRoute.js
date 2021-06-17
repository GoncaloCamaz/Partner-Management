let router = require('express').Router();
const { checkAuthorization } = require('../AuthUtils');

router.get('/', checkAuthorization, function(req, res) {
    res.status(404).jsonp("Service not available")
})

module.exports = router