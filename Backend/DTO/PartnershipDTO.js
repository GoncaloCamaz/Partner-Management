export function partnershipDTOMapper(partnership) {
	return {
		name: partnership.name,
		phoneNumber: partnership.phoneNumber,
		email: partnership.email,
		website: partnership.website,
		addresses: partnership.addresses,
		startDate: partnership.startDate,
		active: partnership.active,
		advantages: partnership.advantages
	}
}