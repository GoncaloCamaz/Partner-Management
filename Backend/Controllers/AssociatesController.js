var Associate = require('../Models/Associate')
const Associates = module.exports

/**
 * Creates new associate
 */
Associates.createAssociate = (associate) => {
    return Associate.create(associate)
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
    return Associate.find({email: email})
                    .exec()
}