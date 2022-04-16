export function paymentDTOMapper(payment) {
	return {
		associateNumber: payment.associateNumber,
		associateName: payment.associateName,
		paymentDate: payment.paymentDate,
		valueReceived: payment.valueReceived,
		yearsPaid: payment.yearsPaid
	}
}