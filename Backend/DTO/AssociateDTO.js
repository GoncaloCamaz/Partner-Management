export function associateDTOMapper(associate) {
	return {
		associateNumber: parseInt(associate.associateNumber),
		name: associate.name,
		phoneNumber: associate.phoneNumber,
		address: associate.address,
		city: associate.city,
		postalCode: associate.postalCode,
		nickname: associate.nickname,
		email: associate.email,
		password: associate.password,
		groups: associate.groups,
		joinedIn: associate.joinedIn,
		currentFeeYear: parseInt(associate.currentFeeYear),
		active: associate.active,
		userRole: associate.userRole
	}
}

export function associateCredentialsDTOMapper(associate) {
	return {
		associateNumber: parseInt(associate.associateNumber),
		email: associate.email,
		newPassword: associate.newPassword,
		oldPassword: associate.oldPassword
	}
}