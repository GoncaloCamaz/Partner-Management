export function paymentMethodDTOMapper(paymentMethod) {
	return {
		name: paymentMethod.name,
		steps: paymentMethod.steps
	}
}