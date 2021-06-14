var Associate = require('../Models/Associate')
const Associates = module.exports

Associates.createAssociate = (associate) => {
    return Associate.create(associate)
}

Associates.listAll = () => {
    return Associate.find()
                    .sort({associate_number: 1})
                    .exec()
}