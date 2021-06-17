var Associate = require('../Models/Associate')
const Associates = module.exports

/**
 * Creates new associate
 */
Associates.createAssociate = (associate) => {
    return Associate.create(associate)
}

/**
 * Updates associate's information
 */
Associates.updateAssociate = (associate) => {
    //TODO
}

/**
 * Updates associate password
 */
Associates.updateAssociateCredentials = (newCredentials) => {
    //TODO
}

/**
 * Deletes an associate
 */
Associates.deleteAssociate = (associate_number) => {
    //TODO 
}

/**
 * Finds all associates
 */
Associates.listAll = () => {
    return Associate.find()
                    .sort({associate_number: 1})
                    .exec()
}

/**
 * Finds an associate by its email
 */
Associates.findAssociateByEmail = (email) => {
    return Associate.findOne({email: email})
                    .exec()
}

/**
 * Gets all associated with shares paid
 */
Associates.listAllWithPaidShares = (year) => {
    return Associate.find({paid_until_year: {$gte: year}})
                    .exec()
}
