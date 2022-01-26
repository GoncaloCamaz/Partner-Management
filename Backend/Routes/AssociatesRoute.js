let router = require('express').Router();
var controller = require('../Controllers/AssociatesController')
const bcrypt = require('bcrypt')
const { checkAdminAuthorization, checkAuthorization } = require('../AuthUtils');

/**
 * Create new Associate
 * //TODO add checkAdminAuthorization
 */
 router.post('/create', async (req, res) => {
    try{
       // const { password } = req.body.password 
      //  const hash = await bcrypt.hash(password, 10)
        const associate = req.body
    
        return controller.createAssociate(associate)
                         .then(data => res.jsonp(data))
                         .catch(error => res.status(500).jsonp(error))
    } catch(e) {
        res.status(500).jsonp("Something went wrong!")
    }
})

/**
 * Updates Associate's information
 */
 router.post('/update', checkAuthorization, async function (req, res) {
    try {
        const data = await controller.updateAssociate(req.body);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

/**
 * Updates Associate's credentials
 */
 router.post('/update/credentials', checkAuthorization, async (req, res) => {
    try{
        const { old_password } = req.body.oldPassword 
        const { new_password } = req.body.newPassword
        const associate = controller.findAssociateByAssociateNumber(req.body.associateNumber)
        
        const validPassword = await bcrypt.compare(old_password, associate.password)
        if(validPassword)
        {
            const hash_new = await bcrypt.hash(new_password, 10)
            const associateNewCredentials = {password: hash_new, email: req.body.email}
        
            return controller.updateAssociateCredentials(associateNewCredentials)
                             .then(data => res.jsonp(data))
                             .catch(error => res.status(500).jsonp(error))
        }
        
    
        res.status(401).jsonp("Bad credentials inserted!")
    } catch(e) {
        res.status(500).jsonp("Something went wrong!")
    }
})

/**
 * This route allows user to reset credentials via email generation
 * This method requires generating new password and send it via email
 * directly to user
 */
router.post('/credentials/reset', checkAuthorization, function(_req, res) {
    //TODO - GMAIL MICROSERVICE 
    res.status(404).jsonp("Service not available!")
})

/**
 * Create new Associate
 */
 router.delete('/delete/:associateNumber', checkAdminAuthorization, async (req, res) => {
    try{
        return controller.deleteAssociate(req.params.associateNumber)
                         .then(data => res.jsonp(data))
                         .catch(error => res.status(500).jsonp(error))
    } catch(e) {
        res.status(500).jsonp("Something went wrong!")
    }
})

/**
 * Get all associates
 */
router.get('/', async function (_req, res) {
    try {
        const data = await controller.listAll();
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
});

/**
 * Get associate information by associate number
 */
router.get('/number/:number', checkAuthorization, async function(req, res){
    try {
        const data = await controller.findAssociateByAssociateNumber(req.params.number);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

/**
 * Get associate information by associate number
 */
 router.get('/email/:email', checkAuthorization, async function(req, res){
    try {
        const data = await controller.findAssociateByEmail(req.params.email);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})

/**
 * Gets all associates with paid shares until given year
 */
router.get('/fees/:year', checkAdminAuthorization, async function(req,res){
    try {
        const data = await controller.listAllWithPaidShares(req.params.year);
        return res.jsonp(data);
    } catch (error) {
        return res.status(500).jsonp(error);
    }
})


module.exports = router;
