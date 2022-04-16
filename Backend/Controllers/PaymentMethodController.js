const { paymentMethodDTOMapper } = require('../DTO/PaymentMethodDTO')
var PaymentMethod = require('../Models/Paymentmethods')
const PaymentMethods = module.exports

/**
 * Creates new payment method
 */
PaymentMethods.create = (paymentMethod) => {
	const paymentMethodDTO = paymentMethodDTOMapper(paymentMethod);
    return PaymentMethod.create(paymentMethodDTO);
}

/**
 * Delete payment method
 */
PaymentMethods.delete = (name) => {
    return PaymentMethod.findOneAndDelete({name: name}).exec();
}

/**
 * Lists all payment methods
 */
PaymentMethods.listAll = () => {
    return PaymentMethod.find().exec();
}
