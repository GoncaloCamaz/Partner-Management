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
    const updated = {
        name: associate.name,
        phoneNumber: associate.phoneNumber,
        address: associate.address,
        email: associate.email,
        userRole: associate.userRole,
        joinedIn: associate.joinedIn,
        groups: associate.groups,
        paidUntilYear: associate.paidUntilYear
    }

    return Associate.findOneAndUpdate(
        {associateNumber: associate.associateNumber},
        {updated}
    ).exec()
}

/**
 * Updates associate password
 */
Associates.updateAssociateCredentials = (newCredentials) => {
    //TODO CIPHER PASSWORD
    return Associate.findOneAndUpdate(
        {email: newCredentials.email}, {password: newCredentials.password}
    ).exec()
}

/**
 * Deletes an associate
 * This method does not delete the user from 
 */
Associates.deleteAssociate = (associateNumber) => {
    return Associate.findOneAndUpdate(
        {associateNumber: associateNumber}, {active: false}
    ).exec()
}

/**
 * Finds all associates
 */
Associates.listAll = () => {
    return Associate.find({active: true})
                    .sort({associateNumber: 1})
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
    return Associate.find({paidUntilYear: {$gte: year}})
                    .exec()
}
