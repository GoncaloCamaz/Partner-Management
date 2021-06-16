let router = require('express').Router();
var controller = require('../Controllers/AssociatesController')
const bcrypt = require('bcrypt')
const { checkAdminAuthorization } = require('../AuthUtils');

/**
 * Create new Associate
 */
 router.post('/create', checkAdminAuthorization, async (req, res) => {
    try{
        const { password } = req.body.password 
        const hash = await bcrypt.hash(password, 10)
        const associate = {password: hash, ...rest}
    
        return controller.createAssociate(associate)
                         .then(data => res.jsonp(data))
                         .catch(error => res.status(500).jsonp(error))
    } catch(e) {
        res.status(500).jsonp("Something went wrong!")
    }
})


/**
 * Get all associates
 */
router.get('/', checkAdminAuthorization, function (_req, res) {
    return controller.listAll()
                     .then(data => res.jsonp(data))
                     .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
