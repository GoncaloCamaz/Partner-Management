const { associateCredentialsDTOMapper, associateDTOMapper } = require('../DTO/AssociateDTO')

var Associate = require('../Models/Associate')
const Associates = module.exports

/**
 * Creates new associate
 */
Associates.createAssociate = (associate) => {
	const associateDTO = associateDTOMapper(associate);
	const newAssociateNumber = Associate.findOne().sort({associateNumber: -1}) + 1;
	const password = "newpassword"
	const associateValues = {
		...associateDTO,
		associateNumber: newAssociateNumber,
		password: password
	}
	
    return Associate.create(AssociateDTO(associateValues))
}

/**
 * Updates associate's information
 */
Associates.updateAssociate = (associate) => {
	const associateDTO = associateDTOMapper(associate);
   
	const updatedValues = {
        name: associateDTO.name,
        phoneNumber: associateDTO.phoneNumber,
        nickname: associateDTO.nickname,
        city: associateDTO.city,
        address: associateDTO.address,
        postalCode: associateDTO.postalCode,
        email: associateDTO.email,
        joinedIn: associateDTO.joinedIn,
        groups: associateDTO.groups,
		currentFeeYear: associateDTO.currentFeeYear
    }

    return Associate.findOneAndUpdate(
			{associateNumber: associateDTO.associateNumber},
			updatedValues,
			{new: true}
    	).exec();
}

/**
 * Updates all associate's information (Admin)
 */
 Associates.updateAssociateAdmin = (associate) => {
	const associateDTO = associateDTOMapper(associate);
   
    return Associate.findOneAndUpdate(
			{associateNumber: associateDTO.associateNumber},
			associateDTO,
			{new: true}
    	).exec();
}

/**
 * Updates associate password
 */
Associates.updateAssociateCredentials = (associate) => {
	const associateCredentialsDTO = associateCredentialsDTOMapper(associate);
    //TODO CIPHER PASSWORD
    return Associate.findOneAndUpdate(
						{email: associateCredentialsDTO.email}, 
						{password: associateCredentialsDTO.newPassword}
					).exec();
}

/**
 * Deletes an associate
 * This method does not delete the user from 
 */
Associates.deleteAssociate = (associateNumber) => {
    return Associate.findOneAndUpdate(
			{associateNumber: associateNumber},
			{active: false}
		).exec();
}

/**
 * Finds all associates
 */
Associates.listAll = () => {
    return Associate.find({active: true})
                    .sort({associateNumber: 1})
                    .exec();
}

/**
 * Finds an associate by its email
 */
Associates.findAssociateByEmail = (email) => {
    return Associate.findOne({email: email})
                    .exec();
}

/**
 * Finds an associate by its associate number
 */
Associates.findAssociateByAssociateNumber = (number) => {
    return Associate.findOne({associateNumber: number})
                    .exec();
}

/**
 * Gets all associated with shares paid
 */
Associates.listAllWithPaidShares = (year) => {
    return Associate.find({paidUntilYear: {$gte: year}})
                    .exec();
}
