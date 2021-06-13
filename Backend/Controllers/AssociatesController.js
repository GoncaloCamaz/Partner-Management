var Associate = require('../Models/Associate')
const Associates = module.exports

Associates.listAll = () => {
    return Associate.find()
                    .sort({associate_number: 1})
                    .exec()
}