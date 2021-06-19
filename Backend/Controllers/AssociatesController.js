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
        phone_number: associate.phone_number,
        address: associate.address,
        email: associate.email,
        user_role: associate.user_role,
        joined_in: associate.joined_in,
        groups: associate.groups,
        paid_until_year: associate.paid_until_year
    }

    return Associate.findOneAndUpdate(
        {associate_number: associate.associate_number},
        {updated}
    ).exec()
}

/**
 * Updates associate password
 */
Associates.updateAssociateCredentials = (newCredentials) => {
    return Associate.findOneAndUpdate(
        {email: newCredentials.email}, {password: newCredentials.password}
    ).exec()
}

/**
 * Deletes an associate
 * This method does not delete the user from 
 */
Associates.deleteAssociate = (associate_number) => {
    return Associate.findOneAndUpdate(
        {associate_number: associate_number}, {active: false}
    ).exec()
}

/**
 * Finds all associates
 */
Associates.listAll = () => {
    return Associate.find({active: true})
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
